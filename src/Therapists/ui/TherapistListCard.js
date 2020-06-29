import React from 'react';

import { CardShell, CardGrid } from 'Therapists/ui/styles-Therapist';
import asyncComponent from 'App/ui/withLazy';

const TherapistMenu = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistMenu" */ 'Therapists/ui/TherapistMenu'
    ),
  'TherapistMenu'
);

const TherapistCardImage = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardImage" */ 'Therapists/ui/TherapistCardImage'
    ),
  'TherapistCardImage'
);

const TherapistCardSummary = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistCardSummary" */ 'Therapists/ui/TherapistCardSummary'
    ),
  'TherapistCardSummary'
);

export const TherapistListCard = therapist => (
  <CardShell as={CardGrid} key={therapist.id} className="therapist-item">
    <TherapistMenu therapistId={therapist.id} />
    <TherapistCardImage image={therapist.image} name={therapist.name} />
    <TherapistCardSummary {...therapist} />
  </CardShell>
);
