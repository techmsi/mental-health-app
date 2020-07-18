import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Page } from 'styles/Layout';
import { AppRoutes, Menu } from 'App/ui/dynamicRoutes';
const App = () => (
  <Page className='app'>
    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  </Page>
);

export default App;
