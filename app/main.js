import { Router, Route, IndexRoute, browserHistory} from 'react-router';
// Components
import { App, Layout, Questionnaire,
  Question, Score, Therapist,
  baseStyles, appStyles, radioStyles } from './modules';

// Supress console.log in Prod
import Log from './utils/Log';
const log = new Log('my-site.com');

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Layout} />
    <Route path="/therapists/:name" component={Therapist} />
    <Route path="/questionnaire" component={Questionnaire}>
      <Route path="/question/:questionId" component={Question}>
        <Route path="/score" component={Score} />
      </Route>
    </Route>
  </Route>
</Router>,
 app);
