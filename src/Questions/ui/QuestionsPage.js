// Component: QuestionsPage
import { Redirect } from 'react-router-dom';

import { Header, SubTitle } from 'styles/Layout';

import { QuestionCard, UnansweredList } from 'Questions/ui/dynamicRoutes';

const QuestionListCard = (question) => <QuestionCard {...question} />;

const QuestionsPage = ({ list, questionnaire, ...props }) => {
  const unanswered = list.filter((o) => !o.answered);
  const completed = list.length > 0 && unanswered.length === 0;

  if (completed) {
    return <Redirect to="/results" />;
  }

  return (
    <>
      <Header>
        <h1>
          Paitent Health Questionnaire <small>(PHQ-9)</small>
        </h1>
      </Header>
      {!completed && <UnansweredList unanswered={unanswered} />}
      <SubTitle className="subtitle">{questionnaire.subtitle}</SubTitle>
      <ul className="questions-list">
        {list.map((question) => (
          <QuestionListCard key={question.id} {...question} />
        ))}
      </ul>
    </>
  );
};

export default QuestionsPage;
