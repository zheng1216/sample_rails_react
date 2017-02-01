import React, {Component, PropTypes} from 'react';
import Profile from './profile';
import EmptyContent from './empty_content';

export default class FavoriteProfiles extends Component {
  profiles() {
    const profiles = this.props.profiles.get('favoriteProfiles');
    if (!profiles.isEmpty()) {
      return profiles.map(
        (profile) => {
          return <Profile key={profile.get('id')} profile={profile}/>
        }
      )
    } else {
      return (
        <EmptyContent />
      )
    }
  }

  render() {
    return (
      <div className='col-lg-4'>
        <h4 className='txt-center'>{'人気のユーザー'}</h4>
        <hr />
        {this.profiles()}
      </div>
    )
  }
}
