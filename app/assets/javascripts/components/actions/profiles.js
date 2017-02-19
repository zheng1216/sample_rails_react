export const SET_PROFILE_DETAIL = 'SET_PROFILE_DETAIL';
export const FETCH_FAVORITE_PROFILES = 'FETCH_FAVORITE_PROFILES';

export function setFavoriteProfiles(profiles) {
  return {
    type: FETCH_FAVORITE_PROFILES,
    profiles: Immutable.fromJS(profiles)
  }
}

export function setProfileDetail(profileDetail) {
  return {
    type: SET_PROFILE_DETAIL,
    profileDetail: Immutable.fromJS(profileDetail)
  }
}
