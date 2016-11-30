// Reducers: Question reducers

import {
  types,
  createReducer,
  update
} from '../../components/imports';

export const questionnaire = createReducer({}, {
  [types.SET_QUESTIONS](state, action) {
    console.debug(`Reducer - SET_QUESTIONS -- questionnaire`, action);

    return update(state, action.questionnaire);
  },
  // Listen for transformation of ANSWER_QUESTION then modify state
  [types.ANSWER_QUESTION](state, action) {
    const index = state.questions.findIndex(obj => obj.id === action.questionId);
    // Mark quesiton as being answered
    state.questions[index].answered = true;

    return update(state, state.questions);
  }
});

export const unanswered = createReducer([], {
  [types.SET_QUESTIONS](state, action) {
    return action.unanswered;
  },
  // Listen for transformation of ANSWER_QUESTION then modify state
  [types.ANSWER_QUESTION](state, action) {
    return action.unanswered;
  }
});

export const questionCount = createReducer(0, {
  [types.SET_QUESTIONS](state, action) {
    // Set to the # of questions received from API call
    return action.questionnaire.questions.length;
  }

});
