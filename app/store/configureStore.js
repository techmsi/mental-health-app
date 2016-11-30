// Redux
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/index';
import { useHotStoreLoaderHelper } from '../util/hotLoaderHelper';

const loggerMiddleware = createLogger({ predicate: (getState, action) => process.env.NODE_ENV !== 'production' });

// Configure Store
export default function configureStore(initialState) {
//   Compose different functions that run through each transformation of state
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  const store = createStore(reducer, initialState, enhancer);

  // Hot reloading in development ONLY
  useHotStoreLoaderHelper(store);

  return store;
}
