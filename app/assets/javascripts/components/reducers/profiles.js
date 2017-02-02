import Immutable from 'immutable';
import {
  FETCH_FAVORITE_PROFILES,
  SET_PROFILE_DETAIL,
  FETCH_FOLLOWED_PROFILES,
  FETCH_FOLLOWING_PROFILES
} from '../actions/profiles';
import {FOLLOW, UNFOLLOW} from '../actions/follow';

const initialState = Immutable.fromJS({
  favoriteProfiles: [],
  followingProfiles: [],
  followedProfiles: [],
  profileDetail: {},
});

function setFollow(state, followedUserId, kind) {
  let changeState = state;
  let followed = kind === FOLLOW ? true : false;

  if (!state.get('profileDetail').isEmpty()) {
    if (state.getIn(['profileDetail', 'userId']) === followedUserId) {
      changeState = changeState.setIn(['profileDetail', 'followed'], followed)
    }
  }
  if (!state.get('followingProfiles').isEmpty()) {
    changeState = setProfilesFollowed(changeState, 'followingProfiles', followedUserId, followed);
  }

  if (!state.get('followedProfiles').isEmpty()) {
    changeState = setProfilesFollowed(changeState, 'followedProfiles', followedUserId, followed);
  }

  return changeState;
}

function setProfilesFollowed(state, kind, followedUserId, followed) {
  const index = findIndexByUserId(state, kind, followedUserId);
  if (index < 0) {
    return state
  } else {
    return state.setIn([kind, index, 'followed'], followed);
  }
}

function findIndexByUserId(state, kind, userId) {
  return state.get(kind).findIndex(
    (profile) => {
      return profile.get('userId') === userId;
    }
  );
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITE_PROFILES:
      return state.set('favoriteProfiles', action.profiles);
    case SET_PROFILE_DETAIL:
      return state.set('profileDetail', action.profileDetail);
    case FETCH_FOLLOWED_PROFILES:
      return state.set('followedProfiles', action.profiles);
    case FETCH_FOLLOWING_PROFILES:
      return state.set('followingProfiles', action.profiles);
    case FOLLOW:
      return setFollow(state, action.followedUserId, FOLLOW);
    case UNFOLLOW:
      return setFollow(state, action.followedUserId, UNFOLLOW);
    default:
      return state;
  }
}
