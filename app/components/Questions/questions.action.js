// Actions: Question actions

import {
  types,
  Api,
  createAnswerSet,
} from '../../components/imports';

export function setQuestionListView({ questionnaire, unanswered }) {
  return {
    type: types.SET_QUESTIONS,
    questionnaire,
    unanswered,
  };
}

// Fetch Questions
export function searchQuestions() {
  return (dispatchToUpdateState, getState) => Api.get(`/api/phq9`)
    .then(data => {
      dispatchToUpdateState(setQuestionListView({
        questionnaire: data,
        unanswered: createAnswerSet(data.questions.length),
      }));
    })
    .catch(err => { console.error(err); });
}
