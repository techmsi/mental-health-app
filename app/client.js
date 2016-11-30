// Entry - Client
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

// Routes
import { Router, browserHistory } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';


const isNotProduction = process.env.NODE_ENV !== 'production';

// Create empty store
const store = configureStore({});

// Stylesheets
require('./scss/app.scss');

const appContainerEl = document.getElementById('react-container');

const renderApp = NextApp => {
  render(
    <Provider store={ store }>
      <AppContainer>
        <Router history={ browserHistory } routes={ routes } key={ `routes-${Math.random()}` } />
      </AppContainer>
    </Provider>
  , appContainerEl);
};

renderApp();


// --- Hot reloading in development ONLY --- //

// enable middleware for hot-reloads in development
const useHotAppLoaderHelper = renderAppFn => {
  if (module.hot) {
    module.hot.accept('./components/Main.container', () => {
      renderAppFn(require('./components/Main.container').default); // eslint-disable-line global-require
    });
  }
};

if (isNotProduction) useHotAppLoaderHelper(renderApp);
