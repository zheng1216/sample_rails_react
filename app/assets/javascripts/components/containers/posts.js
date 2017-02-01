import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/posts';
import Posts from '../components/posts';

function mapStateToProps(state) {
  return {
    posts: state.PostsReducer,
    profiles: state.ProfilesReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {fetchPosts},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
