// Component: TherapistsPage
import React from 'react';

import { Header } from 'styles/Layout';
import { CardList } from 'Therapists/ui/styles-Therapist';

import { SortControls } from 'Therapists/ui/SortControls';
import { TherapistListCard } from 'Therapists/ui/TherapistListCard';

const TherapistsPage = ({ list, onSort, by }) => {
  return (
    <section className='therapists'>
      <Header>
        <SortControls onSort={onSort} by={by} />
        <h3>
          Please choose a <b>Therapist</b> from the list below:
        </h3>
      </Header>
      <CardList className='therapists-list'>
        {list && list.map(TherapistListCard)}
      </CardList>
    </section>
  );
};

export default TherapistsPage;
