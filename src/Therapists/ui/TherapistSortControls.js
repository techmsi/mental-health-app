import React from 'react';
import { OutlineButton, NavShell } from 'styles/Layout';

export const TherapistSortControls = ({ onSort, by }) => {
  const onSortName = () => onSort('name');
  const onSortSpecialty = () => onSort('specialty');

  return (
    <NavShell className='sort'>
      <OutlineButton active={by === 'name'} onClick={onSortName}>
        Sort by Name
      </OutlineButton>
      <OutlineButton active={by === 'specialty'} onClick={onSortSpecialty}>
        Sort by Specialty
      </OutlineButton>
    </NavShell>
  );
};
