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
  getInitialState,
  ERROR_MARGIN,
  ERROR_MARGIN_MOBILE,
  FRAME_HEIGHT,
  FRAME_WIDTH,
  FRAME_HEIGHT_MOBILE,
  FRAME_WIDTH_MOBILE,
  SHRINK_MULTIPLIER,
  GROW_MULTIPLIER,
  MAX_TOP,
  MAX_LEFT,
  MAX_TOP_MOBILE,
  MAX_LEFT_MOBILE,
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

const renderBox = (item, key) => <DraggableBox key={key} id={key} {...item} />;

const calculateUpdatedPosition = (value, max, mulitplier) => {
  let newValue = Math.round(value * mulitplier);
  if (newValue > max) {
    newValue = max;
  }
  return newValue;
};

const getResizedPieces = (pieces, shrink = false) => {
  const updated = {};
  const multiplier = shrink ? SHRINK_MULTIPLIER : GROW_MULTIPLIER;
  const keys = Object.keys(pieces);

  const initialState = getInitialState(shrink);

  keys.forEach((key) => {
    const { top, left } = pieces[key];
    const { expectedTop, expectedLeft } = initialState[key];

    const maxTop = shrink ? MAX_TOP_MOBILE : MAX_TOP;
    const maxLeft = shrink ? MAX_LEFT_MOBILE : MAX_LEFT;

    updated[key] = {
      ...pieces[key],
      top: calculateUpdatedPosition(top, maxTop, multiplier),
      left: calculateUpdatedPosition(left, maxLeft, multiplier),
      expectedTop,
      expectedLeft,
    };
  });

  return updated;
};

const PuzzleContainer = () => {
  const windowSize = useWindowSize();
  const [isSmall, setIsSmall] = useState(windowSize.width < 600);
  const [isSolved, setIsSolved] = useState(false);
  const [boxes, setBoxes] = useState(getInitialState(isSmall));

  const moveBox = useCallback(
    (id, left, top) => {
      const { expectedTop, expectedLeft } = boxes[id];
      const errorMargin = isSmall ? ERROR_MARGIN_MOBILE : ERROR_MARGIN;

      const topCorrect = top < expectedTop + errorMargin && top > expectedTop - errorMargin;
      const leftCorrect = left < expectedLeft + errorMargin && left > expectedLeft - errorMargin;
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
    if (windowSize.width >= 600 && isSmall) {
      setIsSmall(false);
      setBoxes(getResizedPieces(boxes));
    } else if (windowSize.width < 600 && !isSmall) {
      setIsSmall(true);
      setBoxes(getResizedPieces(boxes, true));
    }
  }, [windowSize]);

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
