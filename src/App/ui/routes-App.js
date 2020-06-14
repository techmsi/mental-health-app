import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'App/ui/ErrorBoundary';

const Welcome = React.lazy(() => import('Welcome'));
const TherapistRoutes = React.lazy(() =>
  import('Therapists/ui/routes-Therapist')
);
const QuestionsRoutes = React.lazy(() =>
  import('Questions/ui/routes-Questions')
);
const DiagnosisRoutes = React.lazy(() =>
  import('Diagnosis/ui/routes-Diagnosis')
);

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
