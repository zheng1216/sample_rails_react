import Axios from 'axios';
import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import HomeRoot from './components/components/home_root';
import ProfileRoot from './components/components/profile_root';
import PostRoot from './components/components/post_root';

global.React = React;
global.ReactDOM = ReactDOM;
global.Axios = Axios;
global.Immutable = Immutable;
global.HomeRoot = HomeRoot;
global.ProfileRoot = ProfileRoot;
global.PostRoot = PostRoot;

