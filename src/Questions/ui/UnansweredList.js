import React from 'react';
import { Link } from 'react-router-dom';

import { UnderlineButton } from 'styles/Layout';
import { UnansweredListShell } from 'Questions/ui/styles-Questions';

export const UnansweredList = ({ unanswered }) => (
  <UnansweredListShell>
    <h3 className='header'>Unanswered</h3>
    {unanswered.map(question => (
      <UnderlineButton key={question.id}>
        <Link
          key={`unanswered-${question.id}`}
          className='link'
          to={`/questionnaire/${question.id}`}
        >
          {question.id}
        </Link>
      </UnderlineButton>
    ))}
  </UnansweredListShell>
);
