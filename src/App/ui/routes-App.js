import { Route, Switch } from 'react-router-dom';
import {
  DiagnosisRoutes,
  Welcome,
  TherapistRoutes,
  StyleGuide,
  QuestionsRoutes,
} from 'App/ui/dynamicRoutes';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <Route path="/therapists" component={TherapistRoutes} />
    <Route exact path="/questionnaire" component={QuestionsRoutes} />
    <Route exact path="/results" component={DiagnosisRoutes} />
    <Route exact path="/styles" component={StyleGuide} />
  </Switch>
);

export default AppRoutes;
