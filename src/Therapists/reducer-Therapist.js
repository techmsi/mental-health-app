import { createReducer } from 'util/redux-helpers';
import { GET_THERAPISTS_ASYNC } from 'Therapists/actions-Therapists';

const { PENDING, SUCCESS, ERROR } = GET_THERAPISTS_ASYNC;

// Reducers: Therapists reducers
export const therapists = createReducer(
  {},
  {
    [PENDING] (state, { url, limit }) {
      console.debug(
        `LOADING -- therapists ${url} ${limit ? `, limit: ${limit}` : ''}`
      );

      return {
        ...state,
        loading: true
      };
    },
    [SUCCESS] (state, { therapists = [] }) {
      console.debug(`SETTING -- therapists`, therapists);

      return {
        ...state,
        list: therapists,
        loading: false
      };
    },
    [ERROR] (state, payload) {
      console.debug(`ERROR -- therapists`, payload.error.message);

      return {
        ...state,
        loading: false,
        error: payload.error.message
      };
    }
  }
);
