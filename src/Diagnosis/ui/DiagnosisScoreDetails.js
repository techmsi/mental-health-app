import React from 'react';
import { Header, Details, SeverityText } from 'Diagnosis/ui/styles-Diagnosis';
import {
  ScoreExplanation,
  ScoreTotal,
  ScoreRange
} from 'Diagnosis/ui/dynamicRoutes';

export const ScoreHeader = ({ diagnosis: { severity }, explanation }) => (
  <Header className='header'>
    <h3>Diagnoses of Depression Severity</h3>
    <ScoreExplanation />
    {severity && <SeverityText severity={severity}>{severity}</SeverityText>}
  </Header>
);
export const ScoreDetails = ({ diagnosis, ...props }) => (
  <Details className='details'>
    <span>Score</span>
    <ScoreTotal {...props} />
    <ScoreRange {...diagnosis.range} />
  </Details>
);
