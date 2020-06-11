export const PIECE_WIDTH = 100;
export const PIECE_HEIGHT = 118;
export const PIECE_WIDTH_MOBILE = 50;
export const PIECE_HEIGHT_MOBILE = 59;

export const ERROR_MARGIN = 30;
export const ERROR_MARGIN_MOBILE = 20;
export const SHRINK_MULTIPLIER = 0.5;
export const GROW_MULTIPLIER = 2;

const COLUMN_COUNT = 5;
const ROW_COUNT = 3;
export const FRAME_WIDTH = PIECE_WIDTH * COLUMN_COUNT;
export const FRAME_HEIGHT = PIECE_HEIGHT * ROW_COUNT;
export const FRAME_WIDTH_MOBILE = PIECE_WIDTH_MOBILE * COLUMN_COUNT;
export const FRAME_HEIGHT_MOBILE = PIECE_HEIGHT_MOBILE * ROW_COUNT;

export const MAX_TOP = FRAME_HEIGHT + PIECE_HEIGHT;
export const MAX_LEFT = FRAME_WIDTH;
export const MAX_TOP_MOBILE = FRAME_HEIGHT_MOBILE + PIECE_HEIGHT_MOBILE;
export const MAX_LEFT_MOBILE = FRAME_WIDTH_MOBILE;

export const ItemTypes = {
  BOX: 'box',
};

export const getInitialState = (isMobile = false) => {
  const WIDTH = isMobile ? PIECE_WIDTH_MOBILE : PIECE_WIDTH;
  const HEIGHT = isMobile ? PIECE_HEIGHT_MOBILE : PIECE_HEIGHT;
  const initialTop = 400;
  const initialLeft = 10;

  return {
    a: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_1.jpg',
      expectedTop: 0,
      expectedLeft: 0,
      solved: false,
    },
    b: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_2.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 1,
      solved: false,
    },
    c: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_3.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 2,
      solved: false,
    },
    d: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_4.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 3,
      solved: false,
    },
    e: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_5.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 4,
      solved: false,
    },
    f: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_6.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: 0,
      solved: false,
    },
    g: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_7.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 1,
      solved: false,
    },
    h: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_8.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 2,
      solved: false,
    },
    i: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_9.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 3,
      solved: false,
    },
    j: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_10.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 4,
      solved: false,
    },
    k: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_11.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: 0,
      solved: false,
    },
    l: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_12.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 1,
      solved: false,
    },
    m: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_13.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 2,
      solved: false,
    },
    n: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_14.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 3,
      solved: false,
    },
    o: {
      top: initialTop,
      left: initialLeft,
      title: '/jigsaw/Giant_Days_15.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 4,
      solved: false,
    },
  };
};
