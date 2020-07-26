import React, { useState, useEffect } from 'react';
import { OutlineButton, NavShell } from 'styles/Layout';

export const TherapistSortControls = ({ onSort }) => {
  const [by, setSortBy] = useState(null);

  useEffect(() => {
    onSort(by);
  }, [by, onSort]);

  return (
    <NavShell className='sort'>
      <OutlineButton
        active={by === 'name'}
        onClick={setSortBy.bind(null, 'name')}
      >
        Sort by Name
      </OutlineButton>
      <OutlineButton
        active={by === 'specialty'}
        onClick={setSortBy.bind(null, 'specialty')}
      >
        Sort by Specialty
      </OutlineButton>
    </NavShell>
  );
};
