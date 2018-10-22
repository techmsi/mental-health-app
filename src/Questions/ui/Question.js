import React from 'react';
import { findById } from 'util/helpers';

import { QuestionShell } from 'Questions/ui/styles-Questions';
import { ChoiceListConnect } from 'Choices/connect-Choices';

export const QuestionCard = (props) => {
  const {id, label, answered = false } = props;

  const answeredStyle = answered ? ' answered' : '';

  return (
    <QuestionShell>
      <header className={`label${answeredStyle}`}>
        <span>{id}.</span>
        {label}
      </header>
      <ChoiceListConnect questionId={id} {...props} />
      <footer>
        <span className={`indicator${answeredStyle}`} />
        <span className='number'>{id}</span>
      </footer>
    </QuestionShell>
  );
};

export const Question = ({match: {params: { questionId }}, questionairre: { questions: list }}) => {
  console.debug('Question Card', list);
  return <QuestionCard {...findById(list, questionId)} />;
};

export default Question;
