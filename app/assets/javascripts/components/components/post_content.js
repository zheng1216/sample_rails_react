import {Component} from 'react';
import SimpleFormat from 'react-simple-format'

export default class PostContent extends Component {

  deletePost() {
    const postId = this.props.postDetail.get('id');
    this.props.deletePost(postId);
  }

  get deleteBtn() {
    const profile = this.props.postDetail.get('profile');
    if (profile.get('isMe')) {
      <div className='delete-btn'>
        <button type='button' className='btn btn-danger' onClick={this.deletePost.bind(this)}>{`削除`}</button>
      </div>
    } else {
      <div></div>
    }
  }

  render() {
    const postDetail = this.props.postDetail;
    const profile = postDetail.get('profile');
    return (
      <div className='col-lg-8'>
        <div className='post-preview'>
          <h5 className='post-title post-content'>
            <SimpleFormat text={postDetail.get('content')}/>
          </h5>

          <p className='post-meta'>{`投稿日 ${postDetail.get('createdAt')}`}</p>
        </div>
        {this.deleteBtn}
      </div>
    )
  }
}
