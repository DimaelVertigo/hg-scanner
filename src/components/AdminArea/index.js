import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aside from '../Aside';
import Content from '../Content';

class AdminArea extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Aside/>
          <Content/>
        </div>
      </div>
    );
  }
}

AdminArea.propTypes = {};

export default AdminArea;
