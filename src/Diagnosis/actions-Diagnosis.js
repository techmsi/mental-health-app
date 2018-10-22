import { createAsyncTypes, createAction } from 'util/redux-helpers';

export const GET_DIAGNOSIS_ASYNC = createAsyncTypes('GET_DIAGNOSIS');
const { PENDING, SUCCESS, ERROR } = GET_DIAGNOSIS_ASYNC;

export const diagnosisActions = {
  pending: (url, score) => createAction(PENDING, { url, score }),
  success: diagnosis => createAction(SUCCESS, { diagnosis }),
  error: error => createAction(ERROR, { error })
};
