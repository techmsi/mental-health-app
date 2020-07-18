import asyncComponent from 'App/ui/asyncComponent';

export const Question = asyncComponent(
  () => import(/* webpackChunkName: "Question" */ 'Questions/ui/Question'),
  'Question'
);
export const QuestionCard = asyncComponent(
  () =>
    import(/* webpackChunkName: "QuestionCard" */ 'Questions/ui/QuestionCard'),
  'QuestionCard'
);
export const QuestionsList = asyncComponent(() =>
  import(/* webpackChunkName: "QuestionsList" */ 'Questions/ui/QuestionsList')
);

export const QuestionsPage = asyncComponent(() =>
  import(/* webpackChunkName: "QuestionsPage" */ 'Questions/ui/QuestionsPage')
);

export const UnansweredList = asyncComponent(
  () =>
    import(
      /* webpackChunkName: "UnansweredList" */ 'Questions/ui/UnansweredList'
    ),
  'UnansweredList'
);
