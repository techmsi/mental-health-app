// Component: Therapist Detail
import React from 'react';

import { findById } from 'util/helpers';
import { CardShell, ThankYouShell } from './styles-Therapist';

export const TherapistCardImage = ({
  image,
  name,
  baseUrl = 'https://github.com/techmsi/mental-health-app/blob/master/public/'
}) =>
  image ? (
    <img
      src={`${baseUrl}/images/headshots/${image}?raw=true`}
      alt={`${name}`}
    />
  ) : null;

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
      <TherapistCardImage image={image} name={name} />
      <span className='name'>{name}</span> will be contacted on your behalf.
    </ThankYouShell>
  );
};

export const TherapistCard = ({
  showImage = true,
  id,
  specialty,
  name,
  email,
  image
}) =>
  id ? (
    <CardShell id={`therapist-link-${id}`} className='therapist'>
      <h4 className='name'>{name}, MD</h4>
      <div className='specialty'>{specialty}</div>
      {showImage && <TherapistCardImage image={image} />}
      <div className='email'>{email}</div>
    </CardShell>
  ) : null;

export const Therapist = ({
  match: {
    params: { therapistId }
  },
  therapists: { list }
}) => {
  console.debug('Therapist Card', list);
  return <TherapistCard {...findById(list, therapistId)} />;
};

export default Therapist;
