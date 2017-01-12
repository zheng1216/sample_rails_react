import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchFeed} from '../actions/feed';
import Feed from '../components/feed';

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {fetchFeed},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
