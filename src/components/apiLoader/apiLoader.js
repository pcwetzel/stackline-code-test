import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getData } from '../../actions/index';

const mapDispatchToProps = {
  getData
};

class ApiLoaderContainer extends Component {
  static propTypes = {
    getData: PropTypes.func.isRequired
  };

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
