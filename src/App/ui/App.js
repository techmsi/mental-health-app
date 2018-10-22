import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Page } from 'styles/Layout';
import Menu from 'App/ui/Menu';
import AppRoutes from 'App/ui/routes-App';

const App = () => (
  <Page className='app'>
    <BrowserRouter>
      <main>
        <Menu />
        <AppRoutes />
      </main>
    </BrowserRouter>
  </Page>
);

export default App;
