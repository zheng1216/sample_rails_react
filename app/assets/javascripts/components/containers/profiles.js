import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchFollowProfiles} from '../actions/follow';
import Profiles from '../components/profiles';

function mapStateToProps(state) {
  return {profiles: state.ProfilesReducer}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {fetchFollowProfiles},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
