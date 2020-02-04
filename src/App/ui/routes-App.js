import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

import Welcome from 'Welcome/';
import TherapistRoutes from 'Therapists/ui/routes-Therapist';
import QuestionsRoutes from 'Questions/ui/routes-Questions';
import DiagnosisRoutes from 'Diagnosis/ui/routes-Diagnosis';

class AppRoutes extends PureComponent {
  render() {
    return (
      <>
        <Route exact path="/" component={Welcome} />
        <Route path="/therapists" component={TherapistRoutes} />
        <Route exact path="/questionnaire" component={QuestionsRoutes} />
        <Route exact path="/results" component={DiagnosisRoutes} />
      </>
    );
  }
}

export default AppRoutes;
