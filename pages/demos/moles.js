import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Page from '../../components/Page';
import Button from '../../components/Button';

const GAME_LENGTH = 15000;

const Score = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0 3rem;
  line-height: 1;
  border-radius: 1rem;
`;

const GameControls = styled.div`
  display: flex;
  justify-content: center;
`;

const GameInfo = styled.div`
  h1,
  h2 {
    text-align: center;
  }

  @media only screen and (max-width: 800px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const Game = styled.div`
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  opacity: ${({ isPlaying }) => (isPlaying ? '1' : '0.7')};

  @media only screen and (max-width: 800px) {
    width: 300px;
    height: 300px;
  }
`;

const Hole = styled.div`
  flex: 1 0 33.33%;
  overflow: hidden;
  position: relative;

  :after {
    display: block;
    background: url('/dirt.svg') bottom center no-repeat;
    background-size: contain;
    content: '';
    width: 100%;
    height: 70px;
    position: absolute;
    z-index: 2;
    bottom: -30px;
  }

  @media only screen and (max-width: 800px) {
    :after {
      height: 35px;
      bottom: -15px;
    }
  }
`;

const Mole = styled.div`
  background: url('/mole.svg') bottom center no-repeat;
  background-size: 60%;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  top: ${({ isPeeping }) => (isPeeping ? '0' : '100%')};
  cursor: pointer;
`;

let peepTimer = null;
let gameTimer = null;
const initalMoles = [false, false, false, false, false, false, false, false, false];

const MolesPage = () => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [lastHole, setLastHole] = useState(null);
  const [moles, setMoles] = useState([...initalMoles]);

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole() {
    const index = Math.floor(Math.random() * moles.length);

    if (index === lastHole) {
      return randomHole();
    }
    setLastHole(index);
    return index;
  }

  const setPeeper = (index, isPeeping) => {
    const updateMoles = [...moles];
    updateMoles[index] = isPeeping;
    setMoles(updateMoles);
  };

  function peep() {
    const time = randomTime(200, 1000);
    const holeIndex = randomHole();
    setPeeper(holeIndex, true);

    peepTimer = setTimeout(() => {
      setPeeper(holeIndex, false);
      peep();
    }, time);
  }

  function whack(e, index) {
    if (!e.isTrusted) return; // cheater!
    setScore(score + 1);

    const newPeepers = [...moles];
    newPeepers[index] = false;
    setMoles(newPeepers);
  }

  function endGame() {
    clearTimeout(peepTimer);
    clearTimeout(gameTimer);

    setGameOver(true);
    setIsPlaying(false);
    setMoles([...initalMoles]);
  }

  function startGame() {
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    setMoles([...initalMoles]);

    peep();
    gameTimer = setTimeout(() => {
      endGame();
    }, GAME_LENGTH);
  }

  useEffect(
    () => () => {
      endGame();
    },
    [],
  );

  return (
    <Page>
      <GameInfo>
        <GameControls>
          <Button onClick={isPlaying ? endGame : startGame} width="75%" fontSize="1.5rem" padding="10px">
            {isPlaying ? "I'm done" : 'Play whack a mole!'}
          </Button>
        </GameControls>

        {gameOver && <h1>GAME OVER!</h1>}
        <h2>
          Score
          <Score score={score}>{score}</Score>
        </h2>
      </GameInfo>

      <Game isPlaying={isPlaying}>
        {moles.map((mole, index) => (
          <Hole>
            <Mole isPeeping={moles[index]} onClick={(e) => whack(e, index)} />
          </Hole>
        ))}
      </Game>
    </Page>
  );
};

export default MolesPage;
