import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

// Root reducer & saga
import rootReducer from 'store/rootReducer';
import rootSaga from 'store/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let store = null;

const configureStore = (initialState = {}) => {
  if (store) {
    return store;
  }

  const middlewares = [logger, sagaMiddleware];

  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
