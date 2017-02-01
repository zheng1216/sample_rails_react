import {Component} from 'react';
import Profiles from '../containers/profiles';
import Posts from '../containers/posts';

export default class ProfileBody extends Component {
  render() {
    const profileDetail = this.props.profileDetail;
    let current = profileDetail.get('isMe') ? 'recentPosts' : 'userPosts';
    return (
      <div className='row body-margin'>
        <Profiles />
        <Posts current={current}/>
      </div>
    )
  }
}
