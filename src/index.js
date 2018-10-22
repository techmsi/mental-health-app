import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from 'store/';

import App from 'App/ui/App';

import 'styles/reset.css';
import 'styles/styles.css';

const store = configureStore();

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
