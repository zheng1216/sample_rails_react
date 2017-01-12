import React, {Component, PropTypes} from 'react';
import Person from './person';

export default class People extends Component {
  render() {
    return (
      <div className="col-lg-4">
        <h4>人気のユーザー</h4>
        <hr />
        <Person />
      </div>
    )
  }
}
