import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { scoreActions } from 'Score/actions-Score';
import UiScoreBox from 'Score/ui/ScoreBox';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateScore: scoreActions.updateScore
    },
    dispatch
  );

const mapStateToProps = ({ score }) => ({
  score
});

// Connect to redux
export const ScoreConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(UiScoreBox);
