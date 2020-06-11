import { useDragLayer } from 'react-dnd';
import styled from 'styled-components';

import ItemTypes from './PuzzleItemTypes';
import PuzzleDragPreview from './PuzzleDragPreview';

const StyledLayer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const PuzzleDragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  function renderItem() {
    switch (itemType) {
      case ItemTypes.BOX:
        return <PuzzleDragPreview title={item.title} />;
      default:
        return null;
    }
  }
  if (!isDragging) {
    return null;
  }
  return (
    <StyledLayer>
      <div style={getItemStyles(initialOffset, currentOffset)}>{renderItem()}</div>
    </StyledLayer>
  );
};

export default PuzzleDragLayer;
