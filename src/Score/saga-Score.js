import { select, put, takeLatest } from 'redux-saga/effects';

import { ANSWER_QUESTION } from 'Choices/actions-Choices';
import { scoreActions } from 'Score/actions-Score';
const { updateScore, error } = scoreActions;

const getScoreState = state => state.score;

function * getScore ({ points }) {
  try {
    const score = yield select(getScoreState);
    console.log(`(Saga) Update score by ${points} points. Updated Score: ${score}`);
    put(updateScore(points));
  } catch (e) {
    yield put(error(e));
  }
}

function * watchScore () {
  yield takeLatest(ANSWER_QUESTION, getScore);
}

export default watchScore;
