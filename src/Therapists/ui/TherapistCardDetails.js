import React from 'react';

import { Heading } from 'styles/Layout';
import { CardShell, DetailGrid } from 'Therapists/ui/styles-Therapist';
import {
  TherapistCardImage,
  TherapistBio,
  TherapistCardSummary
} from 'Therapists/ui/dynamicRoutes';

export const TherapistCardDetails = therapist => (
  <CardShell
    as={DetailGrid}
    id={`therapist-details-${therapist.id}`}
    className='therapist'
  >
    <Heading className='header'>Therapists Details</Heading>
    <TherapistCardSummary {...therapist} />
    <TherapistCardImage
      lazy={false}
      image={therapist.image}
      name={therapist.name}
    />
    <TherapistBio />
  </CardShell>
);
