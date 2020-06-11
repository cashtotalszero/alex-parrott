import { useCallback, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import styled from 'styled-components';

import useWindowSize from '../hooks/useWindowSize';
import ItemTypes from './PuzzleItemTypes';
import DraggableBox from './PuzzleDraggablePiece';
import Description from './PuzzleDescription';
import Solution from './PuzzleSolution';
import {
  // initialState,
  getInitialState,
  ERROR_MARGIN,
  FRAME_HEIGHT,
  FRAME_WIDTH,
  FRAME_HEIGHT_MOBILE,
  FRAME_WIDTH_MOBILE,
} from '../constants/puzzle';

const StyledFrame = styled.div`
  height: ${`${FRAME_HEIGHT}px`};
  width: ${`${FRAME_WIDTH}px`};
  background-color: black;
  background-image: url('/jigsaw/Giant_Days_Logo.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 33%;

  @media only screen and (max-width: 600px) {
    width: ${`${FRAME_WIDTH_MOBILE}px`};
    height: ${`${FRAME_HEIGHT_MOBILE}px`};
  }
`;

const StyledDropZone = styled.div`
  width: ${`${FRAME_WIDTH}px`};
  height: 700px;
  border: 1px solid black;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: ${`${FRAME_WIDTH_MOBILE}px`};
  }
`;

function renderBox(item, key) {
  return <DraggableBox key={key} id={key} {...item} />;
}

const PuzzleContainer = () => {
  const windowSize = useWindowSize();
  const [isSmall, setIsSmall] = useState(windowSize.width < 600);
  const [isSolved, setIsSolved] = useState(false);

  // TODO: RE-calc peice positions if peice sizes change (screen re-size!)

  // console.log('Window size = ', windowSize);
  // console.log('Is small = ', isSmall);

  const [boxes, setBoxes] = useState(getInitialState(isSmall));

  const moveBox = useCallback(
    (id, left, top) => {
      const { expectedTop, expectedLeft } = boxes[id];

      const topCorrect = top < expectedTop + ERROR_MARGIN && top > expectedTop - ERROR_MARGIN;
      const leftCorrect = left < expectedLeft + ERROR_MARGIN && left > expectedLeft - ERROR_MARGIN;
      const solved = topCorrect && leftCorrect;

      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top, solved },
          },
        }),
      );
    },
    [boxes],
  );

  const [, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);

      moveBox(item.id, left, top);
      return undefined;
    },
  });

  useEffect(() => {
    const keys = Object.keys(boxes);

    let allSolved = true;
    for (let i = 0; i < keys.length; i += 1) {
      if (!boxes[keys[i]].solved) {
        allSolved = false;
        break;
      }
    }
    setIsSolved(allSolved);
  }, [boxes]);

  useEffect(() => {
    // console.log('Check...');
    if (windowSize.width >= 600 && isSmall) {
      console.log('GO UP!!!!!');
      setIsSmall(false);
      // TODO: Multiply box sizes by 1.33333 (round up)
    } else if (windowSize.width < 600 && !isSmall) {
      console.log('Do down....');
      setIsSmall(true);
      // TODO: Multiply box sizes by 0.75 (round up)
    } else {
      // console.log('Nope');
    }
  }, [windowSize]);

  // console.log('BOXES be landed!!!!');
  // console.log(boxes);
  // console.log('Solved = ', isSolved);

  return (
    <div>
      {!isSolved && (
        <StyledDropZone ref={drop} solved={isSolved}>
          <StyledFrame>{Object.keys(boxes).map((key) => renderBox(boxes[key], key))}</StyledFrame>
          <Description />
        </StyledDropZone>
      )}

      <Solution show={isSolved} />
    </div>
  );
};

export default PuzzleContainer;
