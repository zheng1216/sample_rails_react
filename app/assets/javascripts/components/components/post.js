import {Component} from 'react';

export default class Post extends Component {
  toProfileDetail() {
    const profileId = this.props.post.getIn(['profile', 'id']);
    location.href = `/profiles/${profileId}`;
  }

  toPostDetail() {
    const postId = this.props.post.get('id');
    const userId = this.props.post.get('userId');
    location.href = `/users/${userId}/posts/${postId}`;
  }

  render() {
    const post = this.props.post;
    const profile = post.get('profile');
    return (
      <div className='post-preview'>
        <a href='javascript:void(0)' onClick={this.toPostDetail.bind(this)}>
          <h5 className='post-title'>
            {post.get('title')}
          </h5>
        </a>
        <p className='post-meta'><a href='javascript:void(0)' onClick={this.toProfileDetail.bind(this)} >{profile.get('name')}</a> {post.get('createdAt')}</p>
      </div>
    )
  }
}
