// Actions: Questions
import { createAsyncTypes, createAction } from 'util/redux-helpers';

export const GET_QUESTIONS_ASYNC = createAsyncTypes('GET_QUESTIONS');
const { PENDING, SUCCESS, ERROR } = GET_QUESTIONS_ASYNC;

export const questionsActions = {
  pending: url => createAction(PENDING, { url }),
  success: data => createAction(SUCCESS, { data }),
  error: error => createAction(ERROR, { error })
};
