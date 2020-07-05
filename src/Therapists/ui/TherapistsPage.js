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
        <h1>Certified Therapists</h1>
        <SortControls onSort={onSort} by={by} />
        <h2>Book an Appointment</h2>
      </Header>
      <CardList className='therapists-list'>
        {list && list.map(TherapistListCard)}
      </CardList>
    </section>
  );
};

export default TherapistsPage;
