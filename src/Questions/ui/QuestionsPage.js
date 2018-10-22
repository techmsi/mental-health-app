// Component: QuestionsPage
import React from 'react';
import { Redirect } from 'react-router-dom';

import UnasweredList from 'Questions/ui/UnansweredList';
import { QuestionCard } from 'Questions/ui/Question';
import { Header, SubTitle} from 'styles/Layout';

const QuestionListCard = question => <QuestionCard {...question} />;

const QuestionsPage = ({ list, questionnaire, ...props }) => {
  const unanswered = list.filter(o => !o.answered);
  const completed = list.length > 0 && unanswered.length === 0;

  if (completed) {
    return <Redirect to="/results" />;
  }

  return (
    <>
    <Header>
      <h1>Paitent Health Questionnaire (PHQ-9)</h1>
    </Header>
    {!completed && <UnasweredList unanswered={unanswered} />}
    <SubTitle className="subtitle">{questionnaire.subtitle}</SubTitle>
    <ul className="questions-list">
      {list.map(question => (
        <li key={question.id}>
          <QuestionListCard {...question} />
        </li>
      ))}
    </ul>
    </>
  );
};

export default QuestionsPage;
