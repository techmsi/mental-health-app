// Contianer - Smart Component
import React, { Component } from 'react';

// Components
import { NavBar, mapDispatchToPropsHelper } from './imports';

// Redux wiring
import { connect } from 'react-redux';

class MainView  extends Component {
  render() {
    const links = [
     { title: 'Home', url: '/'},
     { title: 'Therapists',  url:'/therapists'}
   ];

    return (
      <section>
        <NavBar links={links} />
        {this.props.children}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { };
}

// Connect to redux
export default connect(mapStateToProps, mapDispatchToPropsHelper)(MainView);
