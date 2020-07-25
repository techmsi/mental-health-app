import React from 'react';

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
    <h2 className='header'>Therapists Details</h2>
    <TherapistCardSummary {...therapist} />
    <TherapistCardImage
      lazy={false}
      image={therapist.image}
      name={therapist.name}
    />
    <TherapistBio />
  </CardShell>
);
