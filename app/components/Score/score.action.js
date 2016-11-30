// Actions: Score actions

import {
  types,
  Api,
  newArrayWithRemovedItem,
} from '../../components/imports';

export function setInterpretedScore({ diagnosis }) {
  return {
    type: types.INTERPRET_SCORE,
    diagnosis,
  };
}

export function setAnswer(answer) {
  return {
    type: types.ANSWER_QUESTION,
    score: answer.score,
    questionId: answer.questionId,
    unanswered: [...answer.unanswered],
  };
}

// Fetch score
export function answerQuestion(points, id) {
  return (dispatchToUpdateState, getState) => {
    const updatedData = {
      score: getState().score + points,
      questionId: id,
      unanswered: newArrayWithRemovedItem(id, getState().unanswered),
    };

    return dispatchToUpdateState(setAnswer(updatedData));
  };
}

export function interpretScore() {
  return (dispatchToUpdateState, getState) => {
    Api.post(`/api/diagnosis`, { score: getState().score })
    .then(data => dispatchToUpdateState(setInterpretedScore({
      diagnosis: data,
    })))
    .catch(err => {
      console.error(err);
    });
  };
}
