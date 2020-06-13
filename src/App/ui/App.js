import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppRoutes, Menu } from 'App/ui/dynamicRoutes';
const App = () => (
  <>
    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  </>
);

export default App;
