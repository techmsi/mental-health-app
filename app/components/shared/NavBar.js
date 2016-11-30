// Component: NavBar
import React, { Component } from 'react';

// Router
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    const { links } = this.props;

    return (
      <nav className="mainNav">
        {links.map(({ title, url }, key) => <Link key={`main-nav-${title}`} to={url} className={`mainNav__item`}>{title}</Link>)}
      </nav>
    )
  }
}

export default NavBar;
