// src/js/components/Form.jsx
import { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions/index';

const mapDispatchToProps = {
  getData
};

class ApiLoaderContainer extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return null;
  }
}

const ApiLoader = connect(
  null,
  mapDispatchToProps
)(ApiLoaderContainer);

export default ApiLoader;
