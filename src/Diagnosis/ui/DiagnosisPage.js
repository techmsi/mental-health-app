import React, { Component } from 'react';

import { API_ENDPOINT } from 'Api/api-config';
import { ScoreShell } from 'Diagnosis/ui/styles-Diagnosis';

import { TherapistRoutes } from 'App/ui/dynamicRoutes';
import { ScoreHeader, ScoreDetails } from 'Diagnosis/ui/dynamicRoutes';

class DiagnosisPage extends Component {
  componentDidMount() {
    console.debug('Score so far: ', this.props.score);
    this.props.requestApiData(API_ENDPOINT.diagnosis, this.props.score);
  }

  depressed = ({ severity }) =>
    ['moderate', 'moderately severe', 'severe'].indexOf(severity) !== -1;

  render() {
    const { diagnosis } = this.props;
    const depressed = this.depressed(diagnosis);

    return (
      <>
        <ScoreShell>
          <ScoreHeader {...this.props} />
          <ScoreDetails {...this.props} />
        </ScoreShell>
        {diagnosis && depressed && <TherapistRoutes {...this.props} />}
      </>
    );
  }
}

export default DiagnosisPage;
