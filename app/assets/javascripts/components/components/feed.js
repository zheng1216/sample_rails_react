import React, {Component, PropTypes} from 'react';
import Post from './post';

export default class Feed extends Component {
  render() {
    return (
      <div className="col-lg-8">
        <h4>人気の投稿</h4>
        <hr />
        <Post />
        <hr />
      </div>
    )
  }
}
