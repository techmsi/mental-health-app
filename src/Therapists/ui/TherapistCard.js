import React from 'react';
import { CardShell } from 'Therapists/ui/styles-Therapist';
import asyncComponent from 'App/ui/withLazy';

const TherapistCardImage = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardImage" */ 'Therapists/ui/TherapistCardImage'
    ),
  'TherapistCardImage'
);

export const TherapistCard = ({
  showImage = true,
  id,
  specialty,
  name,
  email,
  image
}) =>
  id ? (
    <CardShell id={`therapist-link-${id}`} className="therapist">
      <h4 className="name">{name}, MD</h4>
      <div className="specialty">{specialty}</div>
      {showImage && <TherapistCardImage image={image} />}
      <div className="email">{email}</div>
    </CardShell>
  ) : null;
