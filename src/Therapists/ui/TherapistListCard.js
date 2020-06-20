import React from 'react';
import { Link } from 'react-router-dom';

import { Header, LightButton } from 'styles/Layout';
import { CardShell } from 'Therapists/ui/styles-Therapist';
import { TherapistCard } from 'Therapists/ui/TherapistCard';

export const TherapistListCard = therapist => (
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
