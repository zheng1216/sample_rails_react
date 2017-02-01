import React, {Component, PropTypes} from 'react';
import Follow from '../containers/follow';

export default class Profile extends Component {

  toProfileDetail() {
    const profileId = this.props.profile.get('id');
    location.href = `/profiles/${profileId}`;
  }

  render() {
    const profile = this.props.profile;
    return (
      <div className='favorite_user'>
        <div className='avatar'>
          <img src={profile.get('photoUrl')} className='img-circle'/>
        </div>

        <div className='user_info'>
          <a href='javascript:void(0)' onClick={this.toProfileDetail.bind(this)}>
            <h5>{profile.get('name')}</h5>
          </a>
          <h5>{profile.get('companyName')}</h5>
          <h5><span className='label label-info'>{profile.get('followedCount')}{`フォロワー`}</span></h5>
        </div>
        <Follow profile={profile}/>
      </div>
    )
  }
}
