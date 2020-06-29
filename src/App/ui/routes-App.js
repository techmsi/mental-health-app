import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from 'App/ui/withLazy';

const Welcome = asyncComponent(() =>
  import(/* webpackChunkName: "WelcomeRoute" */ 'Welcome')
);
const TherapistRoutes = asyncComponent(() =>
  import(
    /* webpackChunkName: "TherapistsRoute" */
    'Therapists/ui/routes-Therapist'
  )
);
const QuestionsRoutes = asyncComponent(() =>
  import(
    /* webpackChunkName: "QuestionsRoute" */ 'Questions/ui/routes-Questions'
  )
);
const DiagnosisRoutes = asyncComponent(() =>
  import(
    /* webpackChunkName: "DiagnosisRoute" */ 'Diagnosis/ui/routes-Diagnosis'
  )
);

const StyleGuide = asyncComponent(() =>
  import(/* webpackChunkName: "StyleGuide" */ 'styles/StyleGuide')
);

class AppRoutes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/therapists" component={TherapistRoutes} />
        <Route exact path="/questionnaire" component={QuestionsRoutes} />
        <Route exact path="/results" component={DiagnosisRoutes} />
        <Route exact path="/styles" component={StyleGuide} />
      </Switch>
    );
  }
}

export default AppRoutes;
