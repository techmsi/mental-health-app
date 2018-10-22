import { all, fork } from 'redux-saga/effects';

import therapistsSaga from '../Therapists/saga-Therapists';
import questionsSaga from '../Questions/saga-Questions';
import diagnosisSaga from '../Diagnosis/saga-Diagnosis';
import scoreSaga from '../Score/saga-Score';

function* rootSaga() {
  yield all([
    fork(therapistsSaga),
    fork(questionsSaga),
    fork(scoreSaga),
    fork(diagnosisSaga)
  ]);
}

export default rootSaga;
