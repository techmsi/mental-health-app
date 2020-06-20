// Component: Therapist Detail
import React from 'react';

import { findById } from 'util/helpers';
import asyncComponent from 'App/ui/withLazy';

const TherapistCard = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCard" */ 'Therapists/ui/TherapistCard'
    ),
  'TherapistCard'
);

export const Therapist = ({
  match: {
    params: { therapistId }
  },
  therapists
}) => {
  const detail = findById(therapists.list, therapistId);
  console.debug('Therapist Card', { therapists, detail });

  return <TherapistCard {...detail} />;
};

export default Therapist;
