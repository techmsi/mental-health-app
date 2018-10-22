// Component: Therapist Routes
import React from 'react';
import { Route } from 'react-router-dom';

import { CardWrapper } from 'Therapists/ui/styles-Therapist';
import {
  TherapistListConnect,
  TherapistChosenConnect,
  TherapistConnect
} from 'Therapists/connect-Therapist';

// List & Detail
const TherapistRoutes = ({ match, ...props }) => {
  console.log('Therapist Route props', props);

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
        path={match.url + '/:therapistId'}
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
