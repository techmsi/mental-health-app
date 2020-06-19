// Stateless Component: Welcome Page
import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from 'styles/Layout';
import {
  WelcomeShell,
  WelcomeText,
  WelcomeButton
} from 'Welcome/ui/styles-Welcome';

const Welcome = props => (
  <WelcomeShell className='introduction'>
    <Header>
      <h1>Paitent Health Questionnaire (PHQ-9)</h1>
    </Header>
    <WelcomeText>
      This easy to use patient questionnaire is a self-administered version of
      the PRIME-MD diagnostic instrument for common mental disorders. The PHQ-9
      is the depression module, which scores each of the nine DSM-IV criteria as
      "0" (not at all) to "3" (nearly every day). It has been validated for use
      in primary care. It is not a screening tool for depression but it is used
      to monitor the severity of depression and response to treatment. However,
      it can be used to make a tentative diagnosis of depression in at-risk
      populations - eg, those with coronary heart disease or after stroke.
    </WelcomeText>
    <WelcomeButton>
      <Link to='/questionnaire'> Begin Questionnaire</Link>
    </WelcomeButton>
  </WelcomeShell>
);

export default Welcome;
