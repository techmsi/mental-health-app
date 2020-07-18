import React from 'react';
import { OutlineButton, Header } from 'styles/Layout';

export const TherapistSortControls = ({ onSort, by }) => {
  const onSortName = () => onSort('name');
  const onSortSpecialty = () => onSort('specialty');

  return (
    <Header>
      <nav className='sort'>
        <OutlineButton active={by === 'name'} onClick={onSortName}>
          Sort by Name
        </OutlineButton>
        <OutlineButton active={by === 'specialty'} onClick={onSortSpecialty}>
          Sort by Specialty
        </OutlineButton>
      </nav>
    </Header>
  );
};
