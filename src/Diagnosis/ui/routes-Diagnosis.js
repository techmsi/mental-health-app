import React from 'react';
import { Route } from 'react-router-dom';

import {
  DiagnosisConnect
} from 'Diagnosis/connect-Diagnosis';

// List & Detail
const DiagnosisRoutes = ({ match, ...props }) => {
  return (
    <Route path={match.url} component={DiagnosisConnect} />
  );
};

export default DiagnosisRoutes;
