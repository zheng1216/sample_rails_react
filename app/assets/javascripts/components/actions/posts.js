import 'whatwg-fetch'

export const FETCH_USER_POSTS = 'FETCH_USER_POSTS';
export const FETCH_FOLLOWING_USER_POSTS = 'FETCH_FOLLOWING_USER_POSTS';
export const SET_POST_DETAIL = 'SET_POST_DETAIL';
export const FETCH_RECENT_POSTS = 'FETCH_RECENT_POSTS';

export function setRecentPosts(posts) {
  return {
    type: FETCH_RECENT_POSTS,
    posts: Immutable.fromJS(posts)
  }
}

export function setFollowingUserPosts(posts) {
  return {
    type: FETCH_FOLLOWING_USER_POSTS,
    posts: Immutable.fromJS(posts)
  }
}

export function setUserPosts(posts) {
  return {
    type: FETCH_USER_POSTS,
    posts: Immutable.fromJS(posts)
  }
}


export function setPostDetail(postDetail) {
  return {
    type: SET_POST_DETAIL,
    postDetail: Immutable.fromJS(postDetail)
  }
}

export function fetchPosts(kind, userId) {
  let fetchKind, setAction;
  if (kind === 'followingPosts') {
    fetchKind = FETCH_FOLLOWING_USER_POSTS;
    setAction = setFollowingUserPosts;
  } else if (kind === 'userPosts') {
    fetchKind = FETCH_USER_POSTS;
    setAction = setUserPosts;
  } else {
    fetchKind = FETCH_RECENT_POSTS;
    setAction = setRecentPosts;
  }

  return dispatch => {
    let params = {kind: fetchKind.toLowerCase()};
    if (userId) {
      params = Object.assign(params, {user_id: userId});
      return Axios.get('/posts.json', {params: params}).then((res) => {
        return dispatch(setAction(res.data));
      })
    }
  }
}

export function deletePost(postId) {
  return () => {
    return Axios.delete(`/posts/${postId}`).then(() => {
      location.href = '/my_profile';
    });
  };
}
