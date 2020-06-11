import React from 'react';
import { useDrag } from 'react-dnd';
import Image from '../../../components/Image';

// const style = {
//   border: '1px dashed gray',
//   backgroundColor: 'white',
//   padding: '0.5rem 1rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   cursor: 'move',
//   float: 'left',
// };

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0',
  marginRight: '5px',
  marginBottom: '5px',
  cursor: 'move',
  float: 'left',
  height: '118px',
  width: '100px',
};

export const Box = ({ name, type, isDropped, index }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {/* {isDropped ? <s>{name}</s> : name} */}
      <Image imageSrc={name} imageAlt="Jigsaw piece missing" maxWidth="100px" />
    </div>
  );
};

export default Box;
