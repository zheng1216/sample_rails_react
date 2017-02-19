export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const FETCH_FOLLOWED_PROFILES = 'FETCH_FOLLOWED_PROFILES';
export const FETCH_FOLLOWING_PROFILES = 'FETCH_FOLLOWING_PROFILES';

export function follow(followedUserId) {
  const param = { followed_user_id: followedUserId};
  return dispatch => {
    return Axios.post('/follows', param).then(() => {
      return dispatch({
        type: FOLLOW,
        followedUserId: followedUserId,
      });
    });
  };
}

export function unfollow(followedUserId) {
  return dispatch => {
    return Axios.delete(`/follows/${followedUserId}`).then(() => {
      return dispatch({
        type: UNFOLLOW,
        followedUserId: followedUserId,
      });
    });
  };
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

export function fetchFollowProfiles(userId, kind) {
  let fetchKind, setAction;
  if (kind === 'followedProfiles') {
    fetchKind = FETCH_FOLLOWED_PROFILES;
    setAction = setFollowedProfiles;
  } else if (kind === 'followingProfiles') {
    fetchKind = FETCH_FOLLOWING_PROFILES;
    setAction = setFollowingProfiles;
  }

  return dispatch => {
    const params = {kind: fetchKind.toLowerCase()};

    return Axios.get(`/users/${userId}/follows.json`, {params: params}).then((res) => {
      return dispatch(setAction(res.data));
    })
  };
}
