import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchData } from 'Api/';
import { GET_QUESTIONS_ASYNC, questionsActions } from 'Questions/actions-Questions';

const { success, error } = questionsActions;
const { PENDING } = GET_QUESTIONS_ASYNC;

function * getQuestions (action) {
  try {
    const data = yield call(fetchData, action.url);
    yield put(success(data));
  } catch (e) {
    yield put(error(e));
  }
}

function * watchQuestions () {
  yield takeLatest(PENDING, getQuestions);
}

export default watchQuestions;
