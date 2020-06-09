import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import CustomHead from '../../components/CustomHead';
import Button from '../../components/Button';

const StyledPage = styled.div`
  position: relative;
  background: black;
  border-top: solid 1px #3f84e5;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 10px 0;

  button {
    border: none;
  }
`;

const StyledCanvas = styled.div`
  opacity: ${({ done }) => (done ? '0' : '1')};
  transition: opacity 2s ease-in-out;

  a {
    position: absolute;
    cursor: pointer;
    color: white;
  }
`;

const Quote = styled.h2`
  position: absolute;
  color: white;
  opacity: ${({ done }) => (done ? '0' : '1')};
  transition: opacity 2s ease-in-out;
  margin: 0;
  background: black;
  text-align: center;
  padding: 30px;
  font-style: italic;
`;

const ANIMATION_LENGTH = 10000;
const QUOTE_WAIT = 2500;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?$';
const fontHeight = 11;
const columnsSpacing = 8;
const fps = 24;

let rainTimer = null;
let frameTimer = null;
let quoteTimer = null;

const matrixQuotes = [
  '"Ever have that feeling where you’re not sure if you’re awake or dreaming?"',
  '"No one can be told what the Matrix is. You have to see it for yourself."',
  '"I know what you\'re thinking... Why oh why didn\'t I take the BLUE pill?"',
  '"Have you ever had a dream, that you were so sure was real? What if you were unable to wake from that dream?"',
  '"How do you define real? If you’re talking about what you can feel, what you can smell, taste and see, then “real” is simply electrical signals interpreted by your brain."',
];

const getMatrixQuote = () => {
  const quote = matrixQuotes[Math.floor(Math.random() * matrixQuotes.length)];
  return quote;
};

const MatrixPage = () => {
  const canvas = useRef(null);
  const [done, setDone] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [repeat, setRepeat] = useState(false);
  const [quote, setQuote] = useState(getMatrixQuote());

  function enterTheMatrix(ctx, grid, width, height, newSequence) {
    if (newSequence) {
      rainTimer = setTimeout(() => {
        setDone(true);
      }, ANIMATION_LENGTH);
    }

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);

    for (let f = 0; f < grid.length; f += 1) {
      const d = grid[f];

      d.b == d.d
        ? ((d.b = 0),
          d.a.push({
            c: letters.charAt(Math.floor(Math.random() * letters.length)),
            y: fontHeight + d.a[d.a.length - 1].y,
            alpha: 255,
          }))
        : d.b++;

      for (const l in d.a) {
        const b = d.a[l];
        b &&
          ((b.alpha -= 4),
          b.alpha < 0 && (b.alpha = 0),
          b.y + fontHeight >= height && d.a.splice(l, 1),
          (ctx.fillStyle = `#00${
            Number(b.alpha).toString(16).toUpperCase() < 10
              ? `0${Number(b.alpha).toString(16).toUpperCase()}`
              : `${Number(b.alpha).toString(16).toUpperCase()}`
          }00`),
          ctx.fillText(b.c, columnsSpacing * f, b.y));
      }
    }
    frameTimer = setTimeout(() => {
      enterTheMatrix(ctx, grid, width, height);
    }, 1e3 / fps);
  }

  useEffect(() => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    const width = window.innerWidth;
    const height = window.innerHeight;

    const ctx = canvas.current.getContext('2d');
    ctx.font = '11px Monaco';

    const grid = [];

    for (let k = Math.floor(width / columnsSpacing), m = 0; m < k; m += 1) {
      grid.push({
        x: columnsSpacing * m,
        d: Math.floor(10 * Math.random()) + 2,
        b: 0,
        a: Array({ c: letters.charAt(Math.floor(Math.random() * letters.length)), y: fontHeight, alpha: 255 }),
      });
    }
    enterTheMatrix(ctx, grid, width, height, true);

    quoteTimer = setTimeout(() => {
      setQuote(getMatrixQuote());
    }, QUOTE_WAIT);

    return () => {
      clearTimeout(rainTimer);
      clearTimeout(frameTimer);
      clearTimeout(quoteTimer);
    };
  }, [repeat]);

  return (
    <StyledPage>
      <CustomHead />

      <ButtonWrapper>
        <Button
          height="30px"
          onClick={() => {
            setRepeat(!repeat);
            setDone(false);
          }}
        >
          Reset
        </Button>
      </ButtonWrapper>

      <StyledCanvas done={!done}>
        <Quote>{quote}</Quote>
      </StyledCanvas>
      <StyledCanvas done={done}>
        <canvas id="c" width={canvasSize.width} height={canvasSize.height} ref={canvas} />
      </StyledCanvas>
    </StyledPage>
  );
};

export default MatrixPage;
