export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';

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
