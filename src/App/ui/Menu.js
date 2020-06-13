import React, { memo } from 'react';

import { Header, DarkButtonLink, MainNavShell } from 'styles/Layout';

const Menu = () => (
  <Header>
    <MainNavShell>
      <DarkButtonLink exact to='/'>
        Home
      </DarkButtonLink>
      <DarkButtonLink to='/therapists/list'> Therapists</DarkButtonLink>
    </MainNavShell>
  </Header>
);

export default memo(Menu);
