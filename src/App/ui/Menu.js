import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Header, DarkButton, MainNavShell } from 'styles/Layout';

const Menu = () => (
  <Header>
    <MainNavShell>
      <DarkButton bold>
        <NavLink exact to='/'>
          Home
        </NavLink>
      </DarkButton>
      <DarkButton bold>
        <NavLink to='/therapists/list'> Therapists</NavLink>
      </DarkButton>
    </MainNavShell>
  </Header>
);

export default memo(Menu);
