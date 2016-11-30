// Reducers: Question reducers

import {
  types,
  createReducer
} from '../../components/imports';

export const score = createReducer(0, {
  // Listen for transformation of ANSWER_QUESTION then modify state
  [types.ANSWER_QUESTION](state, action) {
    console.log('%c Reducer - score %s', 'color:red;font-size:20px', action.score);
    return action.score;
  }
});

export const diagnosis = createReducer('', {
  [types.INTERPRET_SCORE](state, action) {
    return action.diagnosis;
  }
});
