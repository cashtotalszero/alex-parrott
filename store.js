// import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers';
import rootSaga from './sagas';

// let store;

// function initStore(initialState) {
//   return createStore(
//     reducers,
//     initialState,
//     composeWithDevTools(applyMiddleware(thunkMiddleware)),
//   );
// }

// export const initializeStore = (preloadedState) => {
//   let _store = store ?? initStore(preloadedState);

//   // After navigating to a page with an initial Redux state, merge that state
//   // with the current state in the store, and create a new store
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });
//     // Reset the current store
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };

// export function useStore(initialState) {
//   const initializedStore = useMemo(() => initializeStore(initialState), [
//     initialState,
//   ]);
//   return initializedStore;
// }

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable-next-line */
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware, thunkMiddleware]));

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
