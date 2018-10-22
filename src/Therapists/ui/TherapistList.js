// Component: Therapists
import React, { Component } from 'react';
import { sortByKey } from 'util/helpers';

import Spinner from '../../Spinner/';
import { ErrorMessage } from 'styles/Layout';
import TherapistsPage from './TherapistsPage';

const API_ENDPOINT = `http://localhost:3001/api/therapists`;

const routeSubpath = ({pathname}) => {
  const [,, subPath = null] = pathname.split('/');
  return subPath;
}

class TherapistList extends Component {
  state = { sortBy: ''};

  componentDidMount() {
    const isFullList = routeSubpath(this.props.location);
    
    if(isFullList) this.props.requestApiData(API_ENDPOINT);
    else this.props.requestApiData(API_ENDPOINT, 3);
  }

  sort = field => {
    console.log('Sort by', field);
    const { list } = this.props.therapists;

    this.setState({ list: sortByKey(list, field), sortBy: field });
  };

  render() {
    const {sortBy} = this.state;
    const { loading, error, list = [] } = this.props.therapists;

    console.info('TherapistList Page', list.length);

    return (
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <TherapistsPage list={list} onSort={this.sort} by={sortBy} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
    );
  }
}

export default TherapistList;
