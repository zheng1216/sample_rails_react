import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setProfiles} from '../actions/profiles';
import FavoriteProfiles from '../components/favorite_profiles';

function mapStateToProps(state) {
  return {profiles: state.ProfilesReducer}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setProfiles},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteProfiles);
