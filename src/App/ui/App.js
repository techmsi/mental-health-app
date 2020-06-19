import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Page } from 'styles/Layout';
import asyncComponent from 'App/ui/withLazy';

const Menu = asyncComponent(() =>
  import(
    /* webpackChunkName: "MenuBar" */
    /* webpackPreload: true */
    'App/ui/Menu'
  )
);
const AppRoutes = asyncComponent(() =>
  import(/* webpackChunkName: "AppRoutes" */ 'App/ui/routes-App')
);

const App = () => (
  <Page className="app">
    <BrowserRouter>
      <main>
        <Menu />
        <AppRoutes />
      </main>
    </BrowserRouter>
  </Page>
);

export default App;
