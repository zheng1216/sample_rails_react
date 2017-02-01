import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PostHead from '../components/post_head';
import PostContent from '../components/post_content';
import PostDetailProfile from '../components/post_detail_profile';
import {deletePost} from '../actions/posts';

export class PostDetail extends Component {

  render() {
    const postDetail = this.props.posts.get('postDetail');
    const followingProfiles = this.props.profiles.get('followingProfiles');
    return (
      <div className='container-fluid'>
        <div className='post'>
          <PostHead postDetail={postDetail} />

          <hr/>

          <div className='body-margin'>
            <PostContent postDetail={postDetail} deletePost={this.props.deletePost} />
            <PostDetailProfile postDetail={postDetail} followingProfiles={followingProfiles}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    posts: store.PostsReducer,
    profiles: store.ProfilesReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deletePost}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
