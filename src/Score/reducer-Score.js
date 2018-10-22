// Reducer: Score
import { createReducer } from "util/redux-helpers";

import { ANSWER_QUESTION, ANSWER_QUESTION_ERROR } from "Choices/actions-Choices";

export const score = createReducer(0, {
  [ANSWER_QUESTION](state, { points }) {
    const score = state + points;

    console.debug(
      `Reducer - (${state}) score %c now ${score}`,
      'font-size:1.5rem'
    );

    return score;
  },
  [ANSWER_QUESTION_ERROR](state, payload) {
    console.debug(`ERROR -- score`, payload.error.message);

    return {
      ...state,
      error: payload.error.message
    };
  }
});
