export const PIECE_WIDTH = 100;
export const PIECE_HEIGHT = 118;
export const PIECE_WIDTH_MOBILE = 75;
export const PIECE_HEIGHT_MOBILE = 89;
export const ERROR_MARGIN = 30;

const COLUMN_COUNT = 5;
const ROW_COUNT = 3;
export const FRAME_WIDTH = PIECE_WIDTH * COLUMN_COUNT;
export const FRAME_HEIGHT = PIECE_HEIGHT * ROW_COUNT;
export const FRAME_WIDTH_MOBILE = PIECE_WIDTH_MOBILE * COLUMN_COUNT;
export const FRAME_HEIGHT_MOBILE = PIECE_HEIGHT_MOBILE * ROW_COUNT;

export const ItemTypes = {
  BOX: 'box',
};

export const getInitialState = (isMobile = false) => {
  const WIDTH = isMobile ? PIECE_WIDTH_MOBILE : PIECE_WIDTH;
  const HEIGHT = isMobile ? PIECE_HEIGHT_MOBILE : PIECE_HEIGHT;

  return {
    a: { top: 400, left: 20, title: '/jigsaw/Giant_Days_1.jpg', expectedTop: 0, expectedLeft: 0, solved: false },
    b: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_2.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 1,
      solved: false,
    },
    c: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_3.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 2,
      solved: false,
    },
    d: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_4.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 3,
      solved: false,
    },
    e: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_5.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 4,
      solved: false,
    },
    f: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_6.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: 0,
      solved: false,
    },
    g: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_7.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 1,
      solved: false,
    },
    h: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_8.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 2,
      solved: false,
    },
    i: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_9.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 3,
      solved: false,
    },
    j: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_10.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 4,
      solved: false,
    },
    k: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_11.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: 0,
      solved: false,
    },
    l: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_12.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 1,
      solved: false,
    },
    m: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_13.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 2,
      solved: false,
    },
    n: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_14.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 3,
      solved: false,
    },
    o: {
      top: 400,
      left: 20,
      title: '/jigsaw/Giant_Days_15.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 4,
      solved: false,
    },
  };
};

// export const initialState = {
//   a: { top: 400, left: 20, title: '/jigsaw/Giant_Days_1.jpg', expectedTop: 0, expectedLeft: 0, solved: false },
//   b: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_2.jpg',
//     expectedTop: 0,
//     expectedLeft: PIECE_WIDTH * 1,
//     solved: false,
//   },
//   c: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_3.jpg',
//     expectedTop: 0,
//     expectedLeft: PIECE_WIDTH * 2,
//     solved: false,
//   },
//   d: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_4.jpg',
//     expectedTop: 0,
//     expectedLeft: PIECE_WIDTH * 3,
//     solved: false,
//   },
//   e: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_5.jpg',
//     expectedTop: 0,
//     expectedLeft: PIECE_WIDTH * 4,
//     solved: false,
//   },
//   f: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_6.jpg',
//     expectedTop: PIECE_HEIGHT * 1,
//     expectedLeft: 0,
//     solved: false,
//   },
//   g: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_7.jpg',
//     expectedTop: PIECE_HEIGHT * 1,
//     expectedLeft: PIECE_WIDTH * 1,
//     solved: false,
//   },
//   h: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_8.jpg',
//     expectedTop: PIECE_HEIGHT * 1,
//     expectedLeft: PIECE_WIDTH * 2,
//     solved: false,
//   },
//   i: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_9.jpg',
//     expectedTop: PIECE_HEIGHT * 1,
//     expectedLeft: PIECE_WIDTH * 3,
//     solved: false,
//   },
//   j: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_10.jpg',
//     expectedTop: PIECE_HEIGHT * 1,
//     expectedLeft: PIECE_WIDTH * 4,
//     solved: false,
//   },
//   k: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_11.jpg',
//     expectedTop: PIECE_HEIGHT * 2,
//     expectedLeft: 0,
//     solved: false,
//   },
//   l: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_12.jpg',
//     expectedTop: PIECE_HEIGHT * 2,
//     expectedLeft: PIECE_WIDTH * 1,
//     solved: false,
//   },
//   m: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_13.jpg',
//     expectedTop: PIECE_HEIGHT * 2,
//     expectedLeft: PIECE_WIDTH * 2,
//     solved: false,
//   },
//   n: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_14.jpg',
//     expectedTop: PIECE_HEIGHT * 2,
//     expectedLeft: PIECE_WIDTH * 3,
//     solved: false,
//   },
//   o: {
//     top: 400,
//     left: 20,
//     title: '/jigsaw/Giant_Days_15.jpg',
//     expectedTop: PIECE_HEIGHT * 2,
//     expectedLeft: PIECE_WIDTH * 4,
//     solved: false,
//   },
// };

export default ItemTypes;
