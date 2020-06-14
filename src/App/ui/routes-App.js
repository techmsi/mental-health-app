import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'App/ui/ErrorBoundary';

const _Welcome = () => import(/* webpackChunkName: "WelcomeRoute" */ 'Welcome');
const _TherapistRoutes = () =>
  import(
    /* webpackChunkName: "TherapistsRoute" */ 'Therapists/ui/routes-Therapist'
  );
const _QuestionsRoutes = () =>
  import(
    /* webpackChunkName: "QuestionsRoute" */ 'Questions/ui/routes-Questions'
  );
const _DiagnosisRoutes = () =>
  import(
    /* webpackChunkName: "DiagnosisRoute" */ 'Diagnosis/ui/routes-Diagnosis'
  );

const Welcome = React.lazy(_Welcome);
const TherapistRoutes = React.lazy(_TherapistRoutes);
const QuestionsRoutes = React.lazy(_QuestionsRoutes);
const DiagnosisRoutes = React.lazy(_DiagnosisRoutes);

class AppRoutes extends PureComponent {
  render() {
    return (
      <ErrorBoundary>
        <React.Suspense fallback={<span>Loading ...</span>}>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/therapists" component={TherapistRoutes} />
            <Route exact path="/questionnaire" component={QuestionsRoutes} />
            <Route exact path="/results" component={DiagnosisRoutes} />
          </Switch>
        </React.Suspense>
      </ErrorBoundary>
    );
  }
}

export default AppRoutes;
