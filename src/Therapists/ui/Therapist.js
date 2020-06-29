// Component: Therapist Detail
import React from 'react';

import { findById } from 'util/helpers';
import asyncComponent from 'App/ui/withLazy';

const TherapistCardDetails = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardDetails" */ 'Therapists/ui/TherapistCardDetails'
    ),
  'TherapistCardDetails'
);

export const Therapist = ({
  match: {
    params: { therapistId }
  },
  therapists
}) => {
  const detail = findById(therapists.list, therapistId);
  console.debug('Therapist Card', { therapists, detail });

  return <TherapistCardDetails {...detail} />;
};

export default Therapist;
