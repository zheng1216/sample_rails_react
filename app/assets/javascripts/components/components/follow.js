import React, {Component, PropTypes} from 'react';

export default class Follow extends Component {

  get isMe() {
    const profile = this.props.profile;
    return profile.get('isMe');
  }

  follow() {
    const profile = this.props.profile;
    if (profile.get('followed')) {
      this.props.unfollow(profile.get('userId'));
    } else {
      this.props.follow(profile.get('userId'));
    }
  }

  get followBtn() {
    const profile = this.props.profile;
    let followBtnClassName, followBtnTxt;
    if (profile.get('followed')) {
      followBtnClassName = 'btn-danger';
      followBtnTxt = '解除';
    } else {
      followBtnClassName = 'btn-default';
      followBtnTxt = 'フォロー';
    }

    let btnClass = this.props.btnClass ? this.props.btnClass : 'follow-btn';
    if (this.props.profile.get('isMe') !== undefined && !this.isMe) {
      return (
        <div className={btnClass}>
          <button className={`btn ${followBtnClassName} btn-block`} type="submit"
                  onClick={this.follow.bind(this)}>{followBtnTxt}</button>
        </div>
      );
    } else {
      return(<div></div>)
    }
  }

  render() {
    return this.followBtn
  }
}
