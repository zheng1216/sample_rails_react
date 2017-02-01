import React, {Component, PropTypes} from 'react';
import Follow from '../containers/follow';
import Profiles from '../containers/profiles';

export default class PostDetailProfile extends Component {
  render() {
    const postDetail = this.props.postDetail;
    const postProfile = postDetail.get('profile');
    return (
      <div>
        <div className='col-lg-4 profile'>
          <div className='col-md-12'>
            <div>
              <img src={postProfile.get('photoUrl')} className='img-circle profile_img'/>
            </div>
            <h2>{postProfile.get('name')}</h2>
            <span>{postProfile.get('companyName')}</span>
            <Follow profile={postProfile} btnClass='post-detail-profile-follow-btn'/>
          </div>
        </div>
        <Profiles currentProfile={postProfile} />
      </div>
    )
  }
}
