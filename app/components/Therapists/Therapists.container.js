// Component: Therapists
import React, { Component } from 'react';

// Router
import { Link } from 'react-router';

// Redux wiring
import { connect } from 'react-redux';

// Components
import {
  Spinner,
  Therapist,
  findById,
  sortByKey,
  mapDispatchToPropsHelper
} from '../imports';

class TherapistView extends Component {
  constructor(props){
    super(props);
    // Loading flag - loading

    this.state = {
      loading: false,
      sortedTherapists: []
    }
  }

  componentWillMount(){
    this._loadData();
  }

  _loadData(){
    const { loading } = this.state;
    const { getTherapists } = this.props;

    this.setState({ loading: true });

    // `getTherapists` comes in from mapDispatchToProps
    getTherapists().then( () => {
      // When completed set search flag to false
      this.setState({ loading: false });
    }).
    catch(err => { console.log('No results')});
  }

  renderList() {
    const { therapists } = this.props;
    const { sortedTherapists } = this.state;

    let list = sortedTherapists.length ? sortedTherapists : therapists;

    return list.map(therapist => <Therapist key={`therapist-${therapist.id}`} {...this.props} {...therapist} addLink="true" />);
  }

  _renderItem (id = "1", addLink) {
    const { therapists } = this.props;

    const therapist = findById(therapists, id);
    console.log('%c therapist %s', 'color:blue;', JSON.stringify(therapist), id, typeof id);

    return <Therapist {...this.props} {...therapist} />
  }

  _onSort(field) {
    const { therapists } = this.props;

    let sorted = sortByKey(therapists, field);

    this.setState({ sortedTherapists: sorted });
  }

  render(){
    const { loading } = this.state;
    const { therapists, params: { therapistId } } = this.props;

    return (
      <div>
      { loading ?
        <Spinner />
      :
          <section className="therapists">
          {(therapists && therapists.length) && therapistId  ?
            <div>{this._renderItem(therapistId)}</div>
            :
            <div>
              <nav className="therapists__sort">
                <button onClick={()=> this._onSort('name') }>Sort by Name</button>
                <button onClick={()=> this._onSort('specialty') }>Sort by Specialty</button>
              </nav>
              <h3>Please choose a therapist from the list below: </h3>
              <section className="therapists__list">{ this.renderList() }</section>
            </div>
            }
          </section>
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    therapists: state.therapists
  }
}

// Connect to redux
export default connect(mapStateToProps, mapDispatchToPropsHelper)(TherapistView);
