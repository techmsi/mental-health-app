import React from 'react';
import { findById } from 'util/helpers';
import { ThankYouShell } from 'Therapists/ui/styles-Therapist';

import { TherapistCardImage } from 'Therapists/ui/dynamicRoutes';

export const TherapistChosen = ({
  match: {
    params: { therapistId }
  },
  therapists: { list },
  showImage
}) => {
  console.debug('Therapist Chosen', list);

  const therapistDetail = findById(list, therapistId);
  const { image, name } = therapistDetail;

  return (
    <ThankYouShell className='therapists__thanks'>
      Thank you for choosing a therapist.
      <TherapistCardImage lazy={false} image={image} name={name} />
      <span className='name'>{name}</span> will be contacted on your behalf.
    </ThankYouShell>
  );
};
