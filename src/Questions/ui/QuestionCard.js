import { QuestionShell } from 'Questions/ui/styles-Questions';

import { ChoiceListConnect } from 'Choices/ui/dynamicRoutes';

export const QuestionCard = (props) => {
  const { id, label, answered = false } = props;

  const answeredStyle = answered ? ' answered' : '';

  return (
    <QuestionShell as="li">
      <header className={`label${answeredStyle}`}>
        <span>{id}.</span>
        {label}
      </header>
      <ChoiceListConnect questionId={id} {...props} />
      <footer>
        <span className={`indicator${answeredStyle}`} />
        <span className="number">{id}</span>
      </footer>
    </QuestionShell>
  );
};
