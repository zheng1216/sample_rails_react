import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {follow, unfollow} from '../actions/follow';
import Follow from '../components/follow';

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {follow: follow, unfollow: unfollow},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
