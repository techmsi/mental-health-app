import React from 'react';
import { Link } from 'react-router-dom';
import { Header, LightButton } from 'styles/Layout';

export const TherapistMenu = ({ therapistId }) => (
  <Header className='therapist__menu'>
    <LightButton>
      <Link to={`/therapists/${therapistId}/details`} className='read-more'>
        See Details
      </Link>
    </LightButton>
    <LightButton>
      <Link to={`/therapists/${therapistId}/contacted`} className='contact'>
        Contact
      </Link>
    </LightButton>
  </Header>
);
