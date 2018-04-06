import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';

class Content extends Component {
  render() {
    return (
      <div className="col-md-9" id="content">
        <Title text="Title"/>
        <div id="render"></div>
        <div id="modal"></div>
      </div>
    );
  }
}

Content.propTypes = {};

export default Content;
