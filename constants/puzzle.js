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

export const SCREEN_BREAK_POINT = 'max-width: 600px';

export const ItemTypes = {
  PUZZLE: 'puzzle',
};

const getJigsawPieces = (isMobile) => {
  const WIDTH = isMobile ? PIECE_WIDTH_MOBILE : PIECE_WIDTH;
  const HEIGHT = isMobile ? PIECE_HEIGHT_MOBILE : PIECE_HEIGHT;

  const pieces = [
    {
      title: '/jigsaw/Giant_Days_1.jpg',
      expectedTop: 0,
      expectedLeft: 0,
    },
    {
      title: '/jigsaw/Giant_Days_2.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 1,
    },
    {
      title: '/jigsaw/Giant_Days_3.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 2,
    },
    {
      title: '/jigsaw/Giant_Days_4.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 3,
    },
    {
      title: '/jigsaw/Giant_Days_5.jpg',
      expectedTop: 0,
      expectedLeft: WIDTH * 4,
    },
    {
      title: '/jigsaw/Giant_Days_6.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: 0,
    },
    {
      title: '/jigsaw/Giant_Days_7.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 1,
    },
    {
      title: '/jigsaw/Giant_Days_8.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 2,
    },
    {
      title: '/jigsaw/Giant_Days_9.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 3,
    },
    {
      title: '/jigsaw/Giant_Days_10.jpg',
      expectedTop: HEIGHT * 1,
      expectedLeft: WIDTH * 4,
    },
    {
      title: '/jigsaw/Giant_Days_11.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: 0,
    },
    {
      title: '/jigsaw/Giant_Days_12.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 1,
    },
    {
      title: '/jigsaw/Giant_Days_13.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 2,
    },
    {
      title: '/jigsaw/Giant_Days_14.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 3,
    },
    {
      title: '/jigsaw/Giant_Days_15.jpg',
      expectedTop: HEIGHT * 2,
      expectedLeft: WIDTH * 4,
    },
  ];
  return pieces;
};

export const getInitialState = (isMobile = false) => {
  const initialTop = 400;
  const initialLeft = 10;
  const puzzlePieces = getJigsawPieces(isMobile);
  const sharedData = { top: initialTop, left: initialLeft, solved: false };

  return {
    a: { ...sharedData, ...puzzlePieces[8] },
    b: { ...sharedData, ...puzzlePieces[2] },
    c: { ...sharedData, ...puzzlePieces[12] },
    d: { ...sharedData, ...puzzlePieces[3] },
    e: { ...sharedData, ...puzzlePieces[1] },
    f: { ...sharedData, ...puzzlePieces[5] },
    g: { ...sharedData, ...puzzlePieces[13] },
    h: { ...sharedData, ...puzzlePieces[0] },
    i: { ...sharedData, ...puzzlePieces[4] },
    j: { ...sharedData, ...puzzlePieces[10] },
    k: { ...sharedData, ...puzzlePieces[7] },
    l: { ...sharedData, ...puzzlePieces[6] },
    m: { ...sharedData, ...puzzlePieces[14] },
    n: { ...sharedData, ...puzzlePieces[11] },
    o: { ...sharedData, ...puzzlePieces[9] },
  };
};
