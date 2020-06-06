// Reducer: Diagnosis
import { createReducer } from 'util/redux-helpers';

import { GET_DIAGNOSIS_ASYNC } from 'Diagnosis/actions-Diagnosis';
const { PENDING, SUCCESS, ERROR } = GET_DIAGNOSIS_ASYNC;

// Reducers: Diagnosis
export const diagnosis = createReducer(
  {},
  {
    [PENDING] (state, { url }) {
      console.debug(`LOADING -- diagnosis ${url}`);

      return {
        ...state,
        loading: true
      };
    },
    [SUCCESS] (state, { diagnosis = [] }) {
      console.debug(`SETTING -- diagnosis`, diagnosis);

      return {
        ...state,
        ...diagnosis,
        loading: false
      };
    },
    [ERROR] (state, payload) {
      console.debug(`ERROR -- diagnosis`, payload.error.message);

      return {
        ...state,
        loading: false,
        error: payload.error.message
      };
    }
  }
);
