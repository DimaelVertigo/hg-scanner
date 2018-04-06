import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import AdminArea from '../AdminArea';

class Panel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="panel" id="panel">
        <Navbar/>
        <AdminArea/>
      </div>
    );
  }
}

Panel.propTypes = {};

export default Panel;
