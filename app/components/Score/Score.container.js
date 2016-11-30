// Component: Score
import React, { Component } from 'react';

// Redux wiring
import { connect } from 'react-redux';

// Components
import { TherapistView } from '../Therapists/';

class ScoreBox extends Component {
  render() {
    const { score, outOfScore, diagnosis } = this.props;
    const isDepressed = ['moderate', 'moderately severe', 'severe'].indexOf(diagnosis.severity) !== -1;

    return (
      <div>
        <aside className="score">
          <header className="score__header">
            <h3>Diagnoses of Depression Severity</h3>
            { diagnosis && diagnosis.severity &&
            <span className={ `score__severity score__severity--${diagnosis.severity}` }>{diagnosis.severity}</span>
          }
          </header>

          <p className="score__details">
            <span>Score</span>
            <span className="score__total">
              <em> { score } </em> out of
          <em> { outOfScore } </em>
            </span>
            { diagnosis && diagnosis.range &&
            <span className="score__ranges">
              <em> { diagnosis.range.min } </em>
              <em> { diagnosis.range.max } </em>
            </span>
        }
          </p>
        </aside>

        { diagnosis && isDepressed &&
        <TherapistView { ...this.props } />
      }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  score: state.score,
  outOfScore: state.questionnaire.outOfScore,
  diagnosis: state.diagnosis,
});

// Connect to redux
export default connect(mapStateToProps)(ScoreBox);
