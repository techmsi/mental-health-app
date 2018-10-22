import { createReducer } from 'util/redux-helpers';
import { updateItem } from 'util/helpers';

import { ANSWER_QUESTION } from 'Choices/actions-Choices';
import { GET_QUESTIONS_ASYNC } from 'Questions/actions-Questions';

const { PENDING, SUCCESS, ERROR } = GET_QUESTIONS_ASYNC;

// Reducers: questions
export const questionnaire = createReducer(
  {},
  {
    [PENDING](state, { url }) {
      console.debug(`LOADING -- questionnaire ${url}`);

      return {
        ...state,
        loading: true
      };
    },
    [SUCCESS](state, { data }) {
      console.debug(`SETTING -- questionnaire`);

      return {
        ...state,
        ...data,
        loading: false
      };
    },
    [ERROR](state, payload) {
      console.debug(`ERROR -- questionnaire`, payload.error.message);

      return {
        ...state,
        loading: false,
        error: payload.error.message
      };
    },
    [ANSWER_QUESTION](state, { questionId }) {
      // Mark quesiton as being answered
      const updatedQuestions = updateItem(state.questions, questionId, {
        answered: true
      });

      const completed = updatedQuestions.filter(o => o.answered).length === state.questions.length;
      
      console.log(`
        Answer Question(${questionId}). 
        All complete? ${completed}
      `);

      return {
        ...state,
        completed,
        questions: updatedQuestions
      };
    }
  }
);
