import React, { useState, useCallback } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
import { ItemTypes } from './ItemTypes';

export const Container = () => {
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
    { accepts: [ItemTypes.JIGSAW], lastDroppedItem: null },
  ]);
  const [boxes] = useState([
    { name: '/jigsaw/Giant_Days_1.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_2.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_3.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_4.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_5.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_6.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_7.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_8.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_9.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_10.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_11.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_12.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_13.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_14.jpg', type: ItemTypes.JIGSAW },
    { name: '/jigsaw/Giant_Days_15.jpg', type: ItemTypes.JIGSAW },
  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }));
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      );
    },
    [droppedBoxNames, dustbins],
  );
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both', width: '500px' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
            index={index + 1}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both', width: '500px' }}>
        {boxes.map(({ name, type }, index) => (
          <Box name={name} type={type} isDropped={isDropped(name)} key={index} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Container;
