import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import combineReducers from './combine_reducers';

const middleWares = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authReducer', 'accountReducer', 'movieGenreReducer']
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger').default;
  middleWares.push(logger);
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleWares)
);

export default () => {
  let persistor = persistStore(store);
  return { store, persistor };
};
