// Components
import {
  MainView,
  Welcome,
  QuestionView,
  Question,
  TherapistView,
  Therapist,
  ScoreView,
} from './components/imports';

const routes = {
  path: '/',
  component: MainView,
  indexRoute: { component: Welcome },
  childRoutes: [
    {
      path: '/therapists',
      component: TherapistView,
      childRoutes: [
        {
          path: 'therapist/:therapistId',
          component: Therapist,
        },
      ],
    },
    {
      path: '/questionnaire',
      component: QuestionView,
      childRoutes: [
        {
          path: 'question/:questionId',
          component: Question,
        },
        {
          path: 'score',
          component: ScoreView,
        },
      ],
    },
  ],
};

export default routes;
