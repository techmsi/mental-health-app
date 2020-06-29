// Component: Therapist Routes
import React from 'react';
import { Route } from 'react-router-dom';

import { CardWrapper } from 'Therapists/ui/styles-Therapist';
import asyncComponent from 'App/ui/withLazy';

const TherapistListConnect = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistListConnect" */ 'Therapists/connect-Therapist'
    ),
  'TherapistListConnect'
);

const TherapistChosenConnect = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistChosenConnect" */ 'Therapists/connect-Therapist'
    ),
  'TherapistChosenConnect'
);

const TherapistConnect = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "TherapistConnect" */ 'Therapists/connect-Therapist'
    ),
  'TherapistConnect'
);
// List & Detail
const TherapistRoutes = ({ match, ...props }) => {
  console.debug('Therapist Route props', props);

  return (
    <CardWrapper>
      <Route
        exact
        path={match.url + '/list'}
        component={TherapistListConnect}
      />
      <Route exact path={match.url} component={TherapistListConnect} />
      <Route
        exact
        path={match.url + '/:therapistId/details'}
        component={TherapistConnect}
      />
      <Route
        exact
        path={match.url + '/:therapistId/contacted'}
        component={TherapistChosenConnect}
      />
    </CardWrapper>
  );
};

export default TherapistRoutes;
