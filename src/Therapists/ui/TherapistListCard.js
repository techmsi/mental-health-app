import React from 'react';

import { CardShell, CardGrid } from 'Therapists/ui/styles-Therapist';

import {
  TherapistMenu,
  TherapistCardImage,
  TherapistCardSummary
} from 'Therapists/ui/dynamicRoutes';

export const TherapistListCard = (therapist, index) => (
  <CardShell as={CardGrid} key={therapist.id} className='therapist-item'>
    <TherapistMenu therapistId={therapist.id} />
    <TherapistCardImage
      lazy={index > 0}
      image={therapist.image}
      name={therapist.name}
    />
    <TherapistCardSummary {...therapist} />
  </CardShell>
);
