import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configure_store';
import PostDetailContainer from '../containers/post_detail';
import { setPostDetail } from '../actions/posts';
import { setFollowingProfiles } from '../actions/follow';

const store = configureStore();

export default class PostRoot extends Component {
  componentWillMount() {
    store.dispatch(setPostDetail(this.props.postDetail));
    store.dispatch(setFollowingProfiles(this.props.profiles));
  }

  render() {
    return (
      <Provider store={store}>
        <PostDetailContainer />
      </Provider>
    );
  }
}
