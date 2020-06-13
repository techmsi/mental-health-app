import React from 'react';

import { Heading } from 'styles/Layout';
import { DetailGrid } from 'Therapists/ui/styles-Therapist';
import {
  TherapistCardImage,
  TherapistBio,
  TherapistCardSummary
} from 'Therapists/ui/dynamicRoutes';

export const TherapistCardDetails = therapist => (
  <DetailGrid id={`therapist-details-${therapist.id}`} className='therapist'>
    <Heading as='h1' className='header'>
      Therapists Details
    </Heading>
    <TherapistCardSummary {...therapist} />
    <TherapistCardImage
      lazy={false}
      image={therapist.image}
      name={therapist.name}
    />
    <TherapistBio />
  </DetailGrid>
);
