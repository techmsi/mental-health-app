// Stateless Component: Welcome Page
import React from 'react';

// Router
import { Link } from 'react-router';

const Welcome = props => (
  <main>
    <h1>Paitent Questionnaire</h1>
    <section className="introduction">
      <p className="introduction__text">This easy to use patient questionnaire is a self-administered version of
      the PRIME-MD diagnostic instrument for common mental disorders.
      The PHQ-9 is the depression module, which scores each of the nine DSM-IV
      criteria as &quot;0&quot; (not at all) to &quot;3&quot; (nearly every day). It has been validated for use in primary care.
      It is not a screening tool for depression but it is used to monitor the severity of depression and response to treatment.
      However, it can be used to make a tentative diagnosis of depression in at-risk populations - eg, those with coronary heart disease or after stroke.
      </p>
      <Link to="questionnaire" className="introduction__begin">
        Begin Questionnaire
      </Link>
    </section>
  </main>
);

export default Welcome;
