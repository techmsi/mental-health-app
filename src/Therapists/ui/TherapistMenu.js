import React from 'react';
import { LightButtonLink, NavShell } from 'styles/Layout';

export const TherapistMenu = ({ therapistId }) => (
  <NavShell className='therapist__menu'>
    <LightButtonLink
      to={`/therapists/${therapistId}/details`}
      className='read-more'
    >
      See Details
    </LightButtonLink>
    <LightButtonLink
      to={`/therapists/${therapistId}/contacted`}
      className='contact'
    >
      Contact
    </LightButtonLink>
  </NavShell>
);
