import React from 'react';
import { Route } from 'react-router-dom';

import {
  QuestionsListConnect,
  QuestionConnect
} from 'Questions/connect-Questions';

// & Detail
const QuestionsRoutes = ({ match, ...props }) => {
  return (
    <>
      <Route path={match.url} component={QuestionsListConnect} />
      <Route
        exact
        path={match.url + '/:questionId'}
        component={QuestionConnect}
      />
    </>
  );
};

export default QuestionsRoutes;
