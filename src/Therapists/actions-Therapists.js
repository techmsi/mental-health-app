// Actions: Therapists
import { createAsyncTypes, createAction } from 'util/redux-helpers';

export const GET_THERAPISTS_ASYNC = createAsyncTypes('GET_THERAPISTS');
const { PENDING, SUCCESS, ERROR } = GET_THERAPISTS_ASYNC;

export const therapistActions = {
  pending: (url, limit = null) => createAction(PENDING, { url, limit }),
  success: therapists => createAction(SUCCESS, { therapists }),
  error: error => createAction(ERROR, { error })
};
