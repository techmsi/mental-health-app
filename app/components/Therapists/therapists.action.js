// Actions: Therapists actions

import {
  types,
  Api
} from '../../components/imports';

// Update store with therapists list
export function setTherapists({therapists}) {
  return {
    type: types.SET_THERAPISTS,
    therapists: [...therapists]
  }
}


// Fetch Therapists from server
export function getTherapists(limit = 3) {

  return (dispatchToUpdateState, getState) => {
    const params = [`limit=${limit}`].join('&');

    return Api.get(`/api/therapists?${params}`)
    .then(data => {
      dispatchToUpdateState(setTherapists({
        therapists: data
      }));
    })
    .catch( err => { console.error(err); })
  }
};
