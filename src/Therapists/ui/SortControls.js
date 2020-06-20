import React from 'react';
import { OutlineButton } from 'styles/Layout';

export const SortControls = ({ onSort, by }) => (
  <nav className='sort'>
    <div>
      <OutlineButton active={by === 'name'} onClick={() => onSort('name')}>
        Sort by Name
      </OutlineButton>
      <OutlineButton
        active={by === 'specialty'}
        onClick={() => onSort('specialty')}
      >
        Sort by Specialty
      </OutlineButton>
    </div>
  </nav>
);
