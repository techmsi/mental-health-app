import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from 'store/';
import { loadState, saveState } from 'store/persistState';
import throttle from 'lodash/throttle';

import App from 'App/ui/App';

import 'styles/reset.css';
import 'styles/styles.css';

const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(
  throttle(() => {
    const { therapists, questionnaire } = store.getState();
    saveState({
      therapists,
      questionnaire
    });
  }, 1000)
);

const Application = () => {
  console.log('store ', store.getState());

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Application />, rootElement);

export default Application;
