import React from 'react';
import { CardShell } from 'Therapists/ui/styles-Therapist';
import { TherapistCardImage } from 'Therapists/ui/TherapistCardImage';

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
