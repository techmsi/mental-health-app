export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ANSWER_QUESTION_ERROR = 'ANSWER_QUESTION_ERROR';

export const answerQuestion = (questionId, points) => ({
  type: ANSWER_QUESTION,
  questionId,
  points
});
