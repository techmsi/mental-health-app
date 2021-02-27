import { findById } from 'util/helpers';

import { QuestionCard } from 'Questions/ui/dynamicRoutes';

export const Question = ({
  match: {
    params: { questionId },
  },
  questionairre: { questions: list },
}) => {
  console.debug('Question Card', list);
  return <QuestionCard {...findById(list, questionId)} />;
};
