import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_API_DATA, receiveApiData } from './';
import { fetchData } from './';

function * getApiDataSaga (action) {
  console.debug('Sage(Fetch): ', action.url);
  try {
    const data = yield call(fetchData, action.url);
    yield put(receiveApiData(data));
  } catch (e) {
    yield put(console.debug(e.message));
  }
}

function * apiSaga () {
  yield takeLatest(REQUEST_API_DATA, getApiDataSaga);
}

export default apiSaga;
