import React, { Component } from "react";

import TherapistRoutes from "Therapists/ui/routes-Therapist";
import {
  ScoreShell,
  Header,
  Details,
  Ranges,
  PullQuote,
  SeverityText
} from "Diagnosis/ui/styles-Diagnosis";

const API_ENDPOINT = `http://localhost:3001/api/diagnosis`;

const ScoreRange = ({ min = 0, max = 27 }) => (
  <Ranges className="ranges">
    <em> {min} </em>
    <em> {max} </em>
  </Ranges>
);

const ScoreTotal = ({ score, outOfScore }) => (
  <span className="total">
    <em> {score || 0} </em> out of
    <em> {outOfScore || 0} </em>
  </span>
);

const ScoreExplanation = () => (
  <PullQuote>
    <p>
      Depression is a mood disorder that causes a persistent feeling of sadness
      and loss of interest.
    </p>
    <cite>Mayo Clinic</cite>
  </PullQuote>
);

const ScoreHeader = ({ diagnosis: { severity }, explanation }) => (
  <Header className="header">
    <h3>Diagnoses of Depression Severity</h3>
    <ScoreExplanation />
    {severity && <SeverityText severity={severity}>{severity}</SeverityText>}
  </Header>
);

const ScoreDetails = ({ diagnosis, ...props }) => (
  <Details className="details">
    <span>Score</span>
    <ScoreTotal {...props} />
    <ScoreRange {...diagnosis.range} />
  </Details>
);

class DiagnosisPage extends Component {
  state = {};

  componentDidMount() {
    console.log("Score so far: ", this.props.score);
    this.props.requestApiData(API_ENDPOINT, this.props.score);
  }

  depressed = ({ severity }) =>
    ["moderate", "moderately severe", "severe"].indexOf(severity) !== -1;

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
