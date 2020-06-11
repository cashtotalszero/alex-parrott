import { memo } from 'react';
import styled from 'styled-components';
import PuzzlePiece from './PuzzlePiece';

const StyledDrag = styled.div`
  display: inline-block;
  transform: rotate(-7deg);
  -webkit-transform: rotate(-7deg);
`;

const PuzzleDragPreview = memo(({ title }) => (
  <StyledDrag>
    <PuzzlePiece title={title} />
  </StyledDrag>
));

export default PuzzleDragPreview;
