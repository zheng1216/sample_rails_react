import React, {Component, PropTypes} from 'react';
import Profile from './profile';
import EmptyContent from './empty_content';

export default class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {current: 'followingProfiles'};
  }

  get profiles() {
    const profiles = this.props.profiles.get(this.state.current);
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

  setCurrent(current) {
    this.setState({current: current});
    const profile = this.props.currentProfile;
    this.props.fetchProfiles(profile.get('userId'), current);
  }

  render() {
    return (
      <div className="col-lg-4">
        <ul className="nav nav-tabs">
          <li role="presentation" className={this.state.current === 'followingProfiles' ? 'active' : '' }>
            <a href='javascript:void(0)' onClick={this.setCurrent.bind(this, 'followingProfiles')}>{`フォロー`}</a>
          </li>
          <li role="presentation" className={this.state.current === 'followedProfiles' ? 'active' : '' }>
            <a href='javascript:void(0)'
               onClick={this.setCurrent.bind(this, 'followedProfiles')}> {`フォロワー`}</a>
          </li>
        </ul>
        {this.profiles}
      </div>
    )
  }
}
