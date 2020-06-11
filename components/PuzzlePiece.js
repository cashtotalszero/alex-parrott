import styled from 'styled-components';
import Image from './Image';

import {
  PIECE_HEIGHT,
  PIECE_HEIGHT_MOBILE,
  PIECE_WIDTH,
  PIECE_WIDTH_MOBILE,
  SCREEN_BREAK_POINT,
} from '../constants/puzzle';

const StyledPuzzlePiece = styled.div`
  border: 1px dashed gray;
  padding: 0;
  cursor: move;
  width: ${`${PIECE_WIDTH}px`};
  height: ${`${PIECE_HEIGHT}px`};

  @media only screen and (${`${SCREEN_BREAK_POINT}`}) {
    width: ${`${PIECE_WIDTH_MOBILE}px`};
    height: ${`${PIECE_HEIGHT_MOBILE}px`};
  }
`;

const PuzzlePiece = ({ title }) => (
  <StyledPuzzlePiece>
    <Image imageSrc={title} imageAlt="Puzzle piece missing" maxWidth="100px" />
  </StyledPuzzlePiece>
);

export default PuzzlePiece;
