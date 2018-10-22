import { combineReducers } from 'redux';

// Reducers
import { questionnaire } from 'Questions/reducer-Questions';
import { therapists } from 'Therapists/reducer-Therapist';
import { score } from 'Score/reducer-Score';
import { diagnosis } from 'Diagnosis/reducer-Diagnosis';

export default combineReducers({
  questionnaire,
  therapists,
  score,
  diagnosis
});
