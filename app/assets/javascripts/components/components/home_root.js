import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configure_store';
import HomeContainer from '../containers/home';
import {setRecentPosts} from '../actions/posts';
import {setFavoriteProfiles} from '../actions/profiles';

const store = configureStore();

export default class HomeRoot extends Component {
  componentWillMount() {
    store.dispatch(setRecentPosts(this.props.posts));
    store.dispatch(setFavoriteProfiles(this.props.profiles));
  }

  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}
