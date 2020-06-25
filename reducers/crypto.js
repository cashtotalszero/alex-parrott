import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from '../actions/crypto';
import { parseCoinInfo, parseCoinPrices } from '../utilities/crypto';
import { DEFAULT_CURRENCY } from '../constants/crypto';

const {
  SET_CURRENCY,
  SET_SELECTION,
  SET_NAME,
  LOAD_LIST_REQUEST,
  LOAD_LIST_FAILURE,
  LOAD_LIST_SUCCESS,
  LOAD_ITEM_REQUEST,
  LOAD_ITEM_FAILURE,
  LOAD_ITEM_SUCCESS,
} = actionTypes;

const initialState = {
  currency: DEFAULT_CURRENCY,
  name: '',
  cryptoData: [],
  listLastUpdate: 0,
  listLoading: false,
  listError: '',
  selected: null,
  itemLastUpdate: 0,
  itemLoading: false,
  itemError: '',
};

const fetchListSuccess = (state, action) => {
  try {
    const coinList = action.data.Data;
    const { currency } = state;
    const parsedData = coinList.map((coin, index) => parseCoinInfo(coin, currency, index + 1));

    return { ...state, listLoading: false, cryptoData: parsedData };
  } catch (e) {
    return { ...state, listLoading: false, listError: 'Data parse failed.' };
  }
};

const fetchItemSuccess = (state, action) => {
  try {
    const { coinId, currency } = action.payload;
    const data = action.payload.data.RAW[coinId][currency];
    const parsedPrices = parseCoinPrices(data, coinId, currency);
    const selected = { ...state.selected, ...parsedPrices };

    return { ...state, itemLoading: false, selected };
  } catch (e) {
    return { ...state, itemLoading: false, itemError: 'Data parse failed.' };
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.crypto };
    }

    case SET_CURRENCY: {
      return { ...state, currency: action.payload };
    }

    case SET_NAME: {
      return { ...state, name: action.payload };
    }

    case SET_SELECTION: {
      return { ...state, selected: action.payload };
    }

    case LOAD_LIST_REQUEST:
      return {
        ...state,
        listLoading: true,
        cryptoData: [],
        listError: '',
      };

    case LOAD_LIST_SUCCESS:
      return fetchListSuccess(state, action);

    case LOAD_LIST_FAILURE:
      return {
        ...state,
        listError: action.error,
        listLoading: false,
      };

    case LOAD_ITEM_REQUEST:
      return {
        ...state,
        itemLoading: true,
        itemError: '',
      };

    case LOAD_ITEM_SUCCESS:
      return fetchItemSuccess(state, action);

    case LOAD_ITEM_FAILURE:
      return {
        ...state,
        itemError: action.error,
        itemLoading: false,
      };

    default:
      return state;
  }
}

export default reducer;
