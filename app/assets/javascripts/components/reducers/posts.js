import Immutable from 'immutable';
import {FETCH_RECENT_POSTS, SET_POST_DETAIL, FETCH_USER_POSTS, FETCH_FOLLOWING_USER_POSTS} from '../actions/posts';
import {FOLLOW, UNFOLLOW} from '../actions/follow';

const initialState = Immutable.fromJS({
  recentPosts: [],
  followingPosts: [],
  userPosts: [],
  postDetail: {},
});

function setFollow(state, followedUserId, kind) {
  let followed = kind === FOLLOW ? true : false;
  if (state.getIn(['postDetail', 'userId']) === followedUserId) {
    return state.setIn(['postDetail', 'profile', 'followed'], followed)
  } else {
    return state;
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_RECENT_POSTS:
      return state.set('recentPosts', action.posts);
    case SET_POST_DETAIL:
      return state.set('postDetail', action.postDetail);
    case FETCH_USER_POSTS:
      return state.set('userPosts', action.posts);
    case FETCH_FOLLOWING_USER_POSTS:
      return state.set('followingPosts', action.posts);
    case FOLLOW:
      return setFollow(state, action.followedUserId, FOLLOW);
    case UNFOLLOW:
      return setFollow(state, action.followedUserId, UNFOLLOW);
    default:
      return state;
  }
}
