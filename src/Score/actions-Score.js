import { createAction } from "util/redux-helpers";

import { ANSWER_QUESTION, ANSWER_QUESTION_ERROR } from "Choices/actions-Choices";

export const scoreActions = {
  updateScore: points => createAction(ANSWER_QUESTION, { points }),
  error: error => createAction(ANSWER_QUESTION_ERROR, { error })
};
