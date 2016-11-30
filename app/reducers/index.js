import { combineReducers } from 'redux';

import * as questionsReducer from '../components/Questions/questions.reducer';
import * as therapistsReducer from '../components/Therapists/therapists.reducer';
import * as scoreReducer from '../components/Score/score.reducer';

export default combineReducers(Object.assign(
  questionsReducer,
  therapistsReducer,
  scoreReducer,
));
