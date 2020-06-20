// Connect: Therapist List
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { therapistActions } from 'Therapists/actions-Therapists';

import UiTherapistList from 'Therapists/ui/TherapistList';
import Therapist from 'Therapists/ui/Therapist';
import { TherapistChosen } from 'Therapists/ui/TherapistChosen';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestApiData: therapistActions.pending
    },
    dispatch
  );

const mapStateToProps = ({ therapists }) => ({
  therapists
});

// Connect to redux
export const TherapistListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(UiTherapistList);

export const TherapistChosenConnect = connect(mapStateToProps)(TherapistChosen);

export const TherapistConnect = connect(mapStateToProps)(Therapist);
