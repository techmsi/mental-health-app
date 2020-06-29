import React from 'react';
import { OutlineButton } from 'styles/Layout';

export const SortControls = ({ onSort, by }) => {
  const onSortName = () => onSort('name');
  const onSortSpecialty = () => onSort('specialty');

  return (
    <nav className='sort'>
      <div>
        <OutlineButton active={by === 'name'} onClick={onSortName}>
          Sort by Name
        </OutlineButton>
        <OutlineButton active={by === 'specialty'} onClick={onSortSpecialty}>
          Sort by Specialty
        </OutlineButton>
      </div>
    </nav>
  );
};
