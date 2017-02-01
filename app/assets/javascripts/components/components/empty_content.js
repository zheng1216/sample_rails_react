import React, {Component, PropTypes} from 'react';

export default class EmptyContent extends Component {
  render() {
    return(
      <div className='empty-profile'>
        <p>{`まだ内容がありません。`}</p>
      </div>
    )
  }
}
