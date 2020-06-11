import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import { getEmptyImage } from 'react-dnd-html5-backend';

import PuzzlePiece from './PuzzlePiece';
import { ItemTypes } from '../constants/puzzle';

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  };
}

const DraggablePiece = (props) => {
  const { id, title, left, top } = props;

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.PUZZLE, id, left, top, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div ref={drag} style={getStyles(left, top, isDragging)}>
      <PuzzlePiece title={title} />
    </div>
  );
};

DraggablePiece.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

export default DraggablePiece;
