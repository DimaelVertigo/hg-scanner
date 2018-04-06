import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Aside extends Component {
  render() {
    return (
      <div className="list-group col-md-3">
        <a href="#" id="to-servers" data-list="servers"
           className="list-group-item list-group-item-action rounded-0">Servers</a>
        <a href="#" className="list-group-item list-group-item-action" id="to-scans" data-list="scans">
          Active User Scans
        </a>
        <a href="#" className="list-group-item list-group-item-action" data-list="geolocation">GeoLocation</a>
        <a href="#" className="list-group-item list-group-item-action disabled">Scan Count</a>
      </div>
    );
  }
}

Aside.propTypes = {};

export default Aside;
