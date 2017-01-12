import React, {Component, PropTypes} from 'react';

export default class Post extends Component {
  // componentWillMount() {
  //   this.props.fetchFeed();
  // }

  render() {
    console.log(this.props.posts);
    return (
      <div className="post-preview">
        <a href="post.html">
          <h5 className="post-title">
            I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
          </h5>
        </a>
        <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 18, 2014</p>
      </div>
    )
  }
}
