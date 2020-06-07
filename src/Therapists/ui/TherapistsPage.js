// Component: TherapistsPage
import React from 'react';
import { Link } from 'react-router-dom';

import { Header, LightButton, OutlineButton } from 'styles/Layout';
import { CardShell, CardList } from './styles-Therapist';

import { TherapistCard } from './Therapist';

const TherapistListCard = therapist => (
  <CardShell>
    <Header>
      <LightButton>
        <Link to={`/therapists/${therapist.id}/`} className='read-more'>
          See Details
        </Link>
      </LightButton>
      <LightButton>
        <Link to={`/therapists/${therapist.id}/contacted`} className='contact'>
          Contact
        </Link>
      </LightButton>
    </Header>
    <TherapistCard {...therapist} showImage={false} />
  </CardShell>
);

const SortControls = ({ onSort, by }) => (
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
        {list &&
          list.map((therapist, i) => (
            <li key={therapist.id} className='therapist-item'>
              <TherapistListCard {...therapist} />
            </li>
          ))}
      </CardList>
    </section>
  );
};

export default TherapistsPage;
