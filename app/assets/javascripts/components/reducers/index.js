import {combineReducers} from 'redux';
import PostsReducer from './posts';
import ProfilesReducer from './profiles';

const rootReducer = combineReducers({
  PostsReducer,
  ProfilesReducer
});

export default rootReducer;
