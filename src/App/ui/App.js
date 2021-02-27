import { BrowserRouter } from 'react-router-dom';

import { AppRoutes, Menu } from 'App/ui/dynamicRoutes';
const App = () => (
  <main id="maincontent">
    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  </main>
);

export default App;
