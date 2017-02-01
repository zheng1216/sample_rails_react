import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configure_store';
import ProfileDetailContainer from '../containers/profile_detail';
import { setRecentPosts } from '../actions/posts';
import { setFollowingProfiles, setProfileDetail } from '../actions/profiles';

const store = configureStore();

export default class ProfileRoot extends Component {
  componentWillMount() {
    store.dispatch(setRecentPosts(this.props.posts));
    store.dispatch(setFollowingProfiles(this.props.profiles));
    store.dispatch(setProfileDetail(this.props.profileDetail));
  }

  render() {
    return (
      <Provider store={store}>
        <ProfileDetailContainer />
      </Provider>
    );
  }
}
