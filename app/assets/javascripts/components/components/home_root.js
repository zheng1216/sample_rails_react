import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configure_store';
import HomeContainer from '../containers/home';

const store = configureStore();

export default class HomeRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );
  }
}
