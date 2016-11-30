// Actions: Score actions

import {
  types,
  Api,
  newArrayWithRemovedItem,
  findByRange
} from '../../components/imports';

export function setInterpretedScore({ diagnosis }) {
  return {
    type: types.INTERPRET_SCORE,
    diagnosis
  }
};

export function setAnswer(answer) {
  return {
    type: types.ANSWER_QUESTION,
    score: answer.score,
    questionId: answer.questionId,
    unanswered: [...answer.unanswered]
  }
};

// Fetch score
export function answerQuestion(points, id) {

  return (dispatchToUpdateState, getState) => {

    return dispatchToUpdateState(setAnswer({
      score: getState().score + points,
      questionId: id,
      unanswered: newArrayWithRemovedItem(id, getState().unanswered)
     }));
  }
};

export function interpretScore() {
  return (dispatchToUpdateState, getState) => {
    let rangeObject = findByRange(getState().questionnaire.scale, getState().score);

    return dispatchToUpdateState(setInterpretedScore({
      diagnosis: rangeObject
     }));
  }
};
