import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchData } from 'Api/';

import {
  GET_THERAPISTS_ASYNC,
  therapistActions
} from 'Therapists/actions-Therapists';
const { success, error } = therapistActions;
const { PENDING } = GET_THERAPISTS_ASYNC;

function * getTherapists ({ url, limit }) {
  console.log(`Get (${limit}) therapists.`);
  try {
    const data = limit
      ? yield call(fetchData, url, { limit })
      : yield call(fetchData, url);

    yield put(success(data));
  } catch (e) {
    yield put(error(e));
  }
}
function * watchTherapists () {
  yield takeLatest(PENDING, getTherapists);
}

export default watchTherapists;
