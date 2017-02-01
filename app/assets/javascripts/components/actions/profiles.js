export const SET_PROFILE_DETAIL = 'SET_PROFILE_DETAIL';
export const FETCH_FAVORITE_PROFILES = 'FETCH_FAVORITE_PROFILES';
export const FETCH_FOLLOWED_PROFILES = 'FETCH_FOLLOWED_PROFILES';
export const FETCH_FOLLOWING_PROFILES = 'FETCH_FOLLOWING_PROFILES';

export function setFavoriteProfiles(profiles) {
  return {
    type: FETCH_FAVORITE_PROFILES,
    profiles: Immutable.fromJS(profiles)
  }
}

export function setFollowedProfiles(profiles) {
  return {
    type: FETCH_FOLLOWED_PROFILES,
    profiles: Immutable.fromJS(profiles)
  }
}

export function setFollowingProfiles(profiles) {
  return {
    type: FETCH_FOLLOWING_PROFILES,
    profiles: Immutable.fromJS(profiles)
  }
}

export function setProfileDetail(profileDetail) {
  return {
    type: SET_PROFILE_DETAIL,
    profileDetail: Immutable.fromJS(profileDetail)
  }
}

export function fetchProfiles(userId, kind) {
  let fetchKind, setAction;
  if (kind === 'followedProfiles') {
    fetchKind = FETCH_FOLLOWED_PROFILES;
    setAction = setFollowedProfiles;
  } else if (kind === 'followingProfiles') {
    fetchKind = FETCH_FOLLOWING_PROFILES;
    setAction = setFollowingProfiles;
  } else {
    fetchKind = FETCH_FAVORITE_PROFILES;
    setAction = setFavoriteProfiles;
  }

  return dispatch => {
    const params = {
      kind: fetchKind.toLowerCase(),
      user_id: userId
    };

    return Axios.get('/profiles.json', {params: params}).then((res) => {
      return dispatch(setAction(res.data));
    })
  };
}
