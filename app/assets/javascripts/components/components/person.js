import React, {Component, PropTypes} from 'react';

export default class Person extends Component {
  render() {
    return (
      <div className="favorite_user">
        <div className="avatar">
          <img src="https://secure.gravatar.com/avatar/de9b11d0f9c0569ba917393ed5e5b3ab?s=140&r=g&d=mm"
               className="img-circle"/>
        </div>

        <div className="user_info">
          <h5>User Name</h5>
          <h5>会社名</h5>
          <h5><span className="label label-info">3フォロワー</span></h5>
        </div>

        <div className="follow_btn">
          <button className="btn btn-default btn-sm btn-block" type="submit">フォロー</button>
        </div>
      </div>
    )
  }
}
