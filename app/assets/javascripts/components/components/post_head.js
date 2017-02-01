import {Component} from 'react';

export default class PostHead extends Component {

  render() {
    const postDetail = this.props.postDetail;
    return (
      <div className='head'>
        <div className='head_text'>
          <h1>{postDetail.get('title')}</h1>
        </div>
      </div>
    )
  }
}
