// Component: Therapists
import React, { Component } from 'react';
import { sortByKey } from 'util/helpers';

import { ErrorMessage } from 'styles/Layout';
import { TherapistsPage } from 'Therapists/ui/dynamicRoutes';

import { API_ENDPOINT } from 'Api/api-config';
import { Spinner } from 'App/ui/dynamicRoutes';

const routeSubpath = ({ pathname }) => {
  const [, , subPath = null] = pathname.split('/');
  return subPath;
};

class TherapistList extends Component {
  componentDidMount() {
    const { list } = this.props.therapists;
    const isLoaded = list && list.length > 0;

    if (!isLoaded) {
      this.loadList();
    }
  }

  loadList() {
    const isFullList = routeSubpath(this.props.location);

    if (isFullList) {
      this.props.requestApiData(API_ENDPOINT.therapists);
    } else {
      this.props.requestApiData(API_ENDPOINT.therapists, 3);
    }
  }

  sort = field => {
    console.debug('Sort by', field);
    const { list } = this.props.therapists;

    this.setState({ list: sortByKey(list, field) });
  };

  render() {
    const { loading, error, list = [] } = this.props.therapists;

    console.debug('TherapistList Page', list.length);

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <TherapistsPage list={list} onSort={this.sort} />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  }
}

export default TherapistList;
