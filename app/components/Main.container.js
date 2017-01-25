// Contianer - Smart Component
import React, { Component } from 'react';
// Redux wiring
import { connect } from 'react-redux';

// Components
import { NavBar, mapDispatchToPropsHelper } from './imports';

class MainView extends Component {
  render() {
    const links = [
     { title: 'Home', url: '/' },
     { title: 'Therapists', url: '/therapists' },
    ];

    return (
      <section>
        <NavBar links={ links } />
        {this.props.children}
      </section>
    );
  }
}

const mapStateToProps = state => ({ });

// Connect to redux
export default connect(mapStateToProps, mapDispatchToPropsHelper)(MainView);
