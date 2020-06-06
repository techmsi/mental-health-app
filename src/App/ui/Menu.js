import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Header, DarkButton } from 'styles/Layout';

const Menu = () => (
  <Header>
    <nav>
      <DarkButton bold>
        <NavLink exact to='/'>
          Home
        </NavLink>
      </DarkButton>
      <DarkButton bold>
        <NavLink to='/therapists/list'> Therapists</NavLink>
      </DarkButton>
    </nav>
  </Header>
);

export default memo(Menu);
