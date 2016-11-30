import * as QuestionActions from '../components/Questions/questions.action';
import * as TherapistsActions from '../components/Therapists/therapists.action';
import * as ScoreActions from '../components/Score/score.action';

export const ActionCreators = Object.assign({},
  QuestionActions,
  TherapistsActions,
  ScoreActions
);
