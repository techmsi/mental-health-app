// Connect: Therapist List
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { therapistActions } from 'Therapists/actions-Therapists';

import {
  TherapistChosen,
  Therapist,
  TherapistList
} from 'Therapists/ui/dynamicRoutes';

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
)(TherapistList);

export const TherapistChosenConnect = connect(mapStateToProps)(TherapistChosen);

export const TherapistConnect = connect(mapStateToProps)(Therapist);
