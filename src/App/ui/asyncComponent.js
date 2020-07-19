import React, { Component } from 'react';

export default function asyncComponent(importComponent, name = null) {
  class AsyncComponent extends Component {
    _isMounted = false;
    state = {
      component: null
    };

    async componentDidMount() {
      this._isMounted = true;
      const component = await importComponent();
      if (this._isMounted) {
        if (name) {
          this.setState({ component: component[name] });
        } else {
          this.setState({ component: component.default });
        }
      }
    }

    componentWillUnmount() {
      // prevent memory leak
      this._isMounted = false;
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
