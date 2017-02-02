import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Posts from './posts';
import FavoriteProfiles from './favorite_profiles';

export class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <FavoriteProfiles />
          <Posts current='recentPosts'/>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
