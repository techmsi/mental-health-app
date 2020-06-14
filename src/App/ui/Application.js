import React from 'react';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import configureStore from 'store/';
import { loadState, saveState } from 'store/persistState';
import App from 'App/ui/App';

const persistedState = loadState();
export const store = configureStore(persistedState);
store.subscribe(
  throttle(() => {
    const { therapists, questionnaire } = store.getState();
    saveState({
      therapists,
      questionnaire
    });
  }, 1000)
);

export const Application = () => {
  console.debug('store ', store.getState());
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};
