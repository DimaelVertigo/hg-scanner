import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light border">
        <a className="navbar-brand logo text-right" href="#">
          <h3>
            Security
            <span className="logo-text">Audit Service</span>
            <p className="logo-text--small h6 mt-1">Administration area</p>
          </h3>
        </a>
      </nav>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
