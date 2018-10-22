import { call, put, takeLatest } from 'redux-saga/effects';
import { sendData } from 'Api/';

import {
  GET_DIAGNOSIS_ASYNC,
  diagnosisActions
} from 'Diagnosis/actions-Diagnosis';

const { success, error } = diagnosisActions;
const { PENDING } = GET_DIAGNOSIS_ASYNC;

function * getDiagnosis ({ url, score }) {
  try {
    const data = yield call(sendData, url, { score });
    yield put(success(data));
  } catch (e) {
    yield put(error(e));
  }
}

function * watchDiagnosis () {
  yield takeLatest(PENDING, getDiagnosis);
}

export default watchDiagnosis;
