import React, {Component, PropTypes} from 'react';
import Post from './post';
import EmptyContent from './empty_content';

export default class Posts extends Component {
  constructor(props = {}) {
    super(props);
    const current = props.current;
    this.state = {current: current};
  }

  componentDidMount() {
    if (this.props.posts.get(this.state.current).isEmpty()) {
      const profile = this.props.profiles.get('profileDetail');
      let userId;
      if (profile) {
        userId = profile.get('userId')
      }
      this.props.fetchPosts(this.state.current, userId);
    }
  }

  get isMe() {
    return this.props.profiles.getIn(['profileDetail', 'isMe']);
  }

  setCurrent(current) {
    this.setState({current: current});
    const profile = this.props.profiles.get('profileDetail');
    this.props.fetchPosts(current, profile.get('userId'));
  }

  get head() {
    if (this.isMe) {
      return (
        <ul className='nav nav-tabs'>
          <li role='presentation' className={this.state.current === 'recentPosts' ? 'active' : '' }>
            <a href='javascript:void(0)' onClick={this.setCurrent.bind(this, 'recentPosts')}>{'最近の投稿'}</a>
          </li>
          <li role='presentation' className={this.state.current === 'followingPosts' ? 'active' : '' }>
            <a href='javascript:void(0)' onClick={this.setCurrent.bind(this, 'followingPosts')}>{'フォロワーの投稿'}</a>
          </li>
          <li role='presentation' className={this.state.current === 'userPosts' ? 'active' : '' }>
            <a href='javascript:void(0)' onClick={this.setCurrent.bind(this, 'userPosts')}>{'自分の投稿'}</a>
          </li>
        </ul>
      )
    } else {
      return [
        <h4 className='txt-center'>{'最近の投稿'}</h4>,
        <hr />
      ]
    }
  }

  get posts() {
    const posts = this.props.posts.get(this.state.current);
    if (posts.isEmpty()) {
      return (
        <EmptyContent/>
      )
    } else {
      return posts.map(
        (post) => {
          return <Post key={post.get('id')} post={post}/>
        }
      )
    }
  }

  render() {
    return (
      <div className='col-lg-8'>
        {this.head}
        {this.posts}
      </div>
    )
  }
}
