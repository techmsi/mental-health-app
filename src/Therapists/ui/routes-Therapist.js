// Component: Therapist Routes
import React from 'react';
import { Route } from 'react-router-dom';

import {
  TherapistChosenConnect,
  TherapistConnect,
  TherapistListConnect
} from 'Therapists/ui/dynamicRoutes';
// List & Detail
const TherapistRoutes = ({ match, ...props }) => {
  console.debug('Therapist Route props', props);

  return (
    <>
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
    </>
  );
};

export default TherapistRoutes;
