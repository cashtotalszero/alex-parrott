import { all, put, takeLatest, select } from 'redux-saga/effects';

import {
  actionTypes,
  loadListFailure,
  loadListSuccess,
  requestFullList,
  setSelection,
  requestSingleItem,
  loadItemSuccess,
  loadItemFailure,
  setCurrency,
  setName,
} from '../actions/crypto';
import { parseCoinInfo } from '../utilities/crypto';
import { CRYPTO_LIST_API, CRYPTO_ITEM_API } from '../constants/urls';

function* fetchAllCoins(action) {
  yield;

  try {
    const currency = action.payload;

    yield put(setCurrency(currency));
    yield put(requestFullList());

    const res = yield fetch(`${CRYPTO_LIST_API}?limit=10&tsym=${currency}`);
    const data = yield res.json();

    yield put(loadListSuccess(data));

    // ...and ensure any selected coin is up to date
    const coinName = yield select(({ crypto }) => crypto.name);
    const selection = yield select(({ crypto }) => crypto.selection);

    if (coinName.length && !selection) {
      let toParse = {};
      let rank = 0;
      for (let i = 0; i < data.Data.length; i += 1) {
        if (data.Data[i].CoinInfo.Name === coinName) {
          toParse = data.Data[i];
          rank = i + 1;
          break;
        }
      }
      const coin = parseCoinInfo(toParse, currency, rank);
      yield put(setSelection(coin));
    }
  } catch (err) {
    yield put(loadListFailure(err.message));
  }
}

function* fetchCoin(action) {
  yield;
  const { coinId, currency } = action.payload;

  try {
    yield put(setCurrency(currency));
    yield put(setName(coinId));
    yield put(requestSingleItem(coinId, currency));

    const res = yield fetch(`${CRYPTO_ITEM_API}?fsyms=${coinId}&tsyms=${currency}`);
    const data = yield res.json();

    yield put(loadItemSuccess(data, coinId, currency));
  } catch (err) {
    yield put(loadItemFailure(err.message));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_ALL_DATA, fetchAllCoins),
    takeLatest(actionTypes.FETCH_SINGLE_ITEM, fetchCoin),
  ]);
}

export default rootSaga;
