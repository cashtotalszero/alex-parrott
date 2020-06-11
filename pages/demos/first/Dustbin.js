import React from 'react';
import { useDrop } from 'react-dnd';

import Image from '../../../components/Image';

// const style = {
//   height: '12rem',
//   width: '12rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   color: 'white',
//   padding: '1rem',
//   textAlign: 'center',
//   fontSize: '1rem',
//   lineHeight: 'normal',
//   float: 'left',
// };
const style = {
  height: '118px',
  width: '100px',
  marginRight: '0',
  marginBottom: '0',
  color: 'white',
  padding: '0',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

export const Dustbin = ({ accept, lastDroppedItem, onDrop, index }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      {/* {isActive ? 'Release to drop' : `This dustbin accepts: ${accept.join(', ')}`} */}

      {/* {lastDroppedItem && <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>} */}
      {lastDroppedItem && (
        <Image imageSrc={lastDroppedItem ? lastDroppedItem.name : ''} imageAlt="Page not found" maxWidth="100px" />
      )}
      {/* <Image imageSrc={lastDroppedItem ? lastDroppedItem.name : ''} imageAlt="Page not found" maxWidth="100px" /> */}
    </div>
  );
};

export default Dustbin;
