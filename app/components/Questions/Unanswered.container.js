// Component: Unanswered
import React, { Component } from 'react';

// Router
import { Link } from 'react-router';

// Redux wiring
import { connect } from 'react-redux';

class UnansweredView extends Component {
  render(){
    const { unanswered } = this.props;

    return (
      <ul className="unanswered">
      <li className="unanswered__header">Unanswered</li>

      { unanswered.map((value, i)=> {
        return (
          <li key={`unanswered-${i}`} className="unanswered__link">
            <Link to={`/questionnaire/question/${value}`}>{value}</Link>
          </li>
        );
      })}
      </ul>
    );
  }
}


const mapStateToProps = state => {
  return {
    unanswered: state.unanswered
  }
}

// Connect to redux
export default connect(mapStateToProps)(UnansweredView);
