// Component: Therapist Detail
import React from 'react';

import { findById } from 'util/helpers';
import { TherapistCard } from 'Therapists/ui/TherapistCard';

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
