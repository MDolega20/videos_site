import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actionCreator from './store/actions/actions';

import Main from './body/Main';
import Header from './body/Header';
import Footer from './body/Footer';

class Body extends Component {
  devMode() {
    // default props on development mode
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log(this.props);
    }
  }
  render() {

    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

Body.propTypes = {
  structureData: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
  structureData: state.structure
});

export default withRouter(connect(
  mapStateToProps,
)(Body));