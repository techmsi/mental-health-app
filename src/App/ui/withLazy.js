import React, { Component } from 'react';

export default function asyncComponent(importComponent, name = null) {
  class AsyncComponent extends Component {
    state = {
      component: null
    };

    async componentDidMount() {
      const component = await importComponent();

      if (name) {
        this.setState({ component: component[name] });
      } else {
        this.setState({ component: component.default });
      }
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
