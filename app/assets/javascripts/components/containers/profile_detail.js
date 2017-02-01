import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ProfileHead from '../components/profile_head';
import ProfileBody from '../components/profile_body';

export class ProfileDetail extends Component {
  render() {
    const profileDetail = this.props.profiles.get('profileDetail');
    return (
      <div className='container-fluid'>
        <div className='profile'>
          <ProfileHead profileDetail={profileDetail}/>
          <ProfileBody profileDetail={profileDetail}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return { profiles: store.ProfilesReducer}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);
