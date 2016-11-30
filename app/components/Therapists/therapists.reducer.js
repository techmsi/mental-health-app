// Reducers: Therapists reducers

import {
  types,
  createReducer,
} from '../../components/imports';

export const therapists = createReducer([], {
  [types.SET_THERAPISTS](state, action) {
    console.debug(`Reducer - SET_THERAPISTS -- therapists`, action);

    return action.therapists;
  },
});
