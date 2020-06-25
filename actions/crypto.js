export const actionTypes = {
  SET_CURRENCY: 'SET_CURRENCY',
  SET_SELECTION: 'SET_SELECTION',
  SET_NAME: 'SET_NAME',
  FETCH_ALL_DATA: 'FETCH_ALL_DATA',
  LOAD_LIST_REQUEST: 'LOAD_LIST_REQUEST',
  LOAD_LIST_SUCCESS: 'LOAD_LIST_SUCCESS',
  LOAD_LIST_FAILURE: 'LOAD_LIST_FAILURE',
  FETCH_SINGLE_ITEM: 'FETCH_SINGLE_ITEM',
  LOAD_ITEM_REQUEST: 'LOAD_ITEM_REQUEST',
  LOAD_ITEM_SUCCESS: 'LOAD_ITEM_SUCCESS',
  LOAD_ITEM_FAILURE: 'LOAD_ITEM_FAILURE',
};

const {
  SET_CURRENCY,
  SET_SELECTION,
  SET_NAME,
  FETCH_ALL_DATA,
  LOAD_LIST_REQUEST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_FAILURE,
  FETCH_SINGLE_ITEM,
  LOAD_ITEM_REQUEST,
  LOAD_ITEM_SUCCESS,
  LOAD_ITEM_FAILURE,
} = actionTypes;

export function fetchAllData(currency) {
  return { type: FETCH_ALL_DATA, payload: currency };
}

export function fetchSingleItem(coinId, currency) {
  return {
    type: FETCH_SINGLE_ITEM,
    payload: {
      coinId,
      currency,
    },
  };
}

export function setCurrency(currency) {
  return { type: SET_CURRENCY, payload: currency };
}

export function setName(name) {
  return { type: SET_NAME, payload: name };
}

export function setSelection(data) {
  return { type: SET_SELECTION, payload: data };
}

export function requestFullList(currency) {
  return { type: LOAD_LIST_REQUEST, payload: currency };
}

export function loadListFailure(error) {
  return {
    type: LOAD_LIST_FAILURE,
    error,
  };
}

export function loadListSuccess(data) {
  return {
    type: LOAD_LIST_SUCCESS,
    data,
  };
}

export function requestSingleItem(coinId, currency) {
  return {
    type: LOAD_ITEM_REQUEST,
    payload: {
      coinId,
      currency,
    },
  };
}

export function loadItemFailure(error) {
  return {
    type: LOAD_ITEM_FAILURE,
    error,
  };
}

export function loadItemSuccess(data, coinId, currency) {
  return {
    type: LOAD_ITEM_SUCCESS,
    payload: {
      data,
      coinId,
      currency,
    },
  };
}
