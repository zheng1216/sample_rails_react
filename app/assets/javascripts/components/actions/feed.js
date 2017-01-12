export const FETCH_FEED = 'FETCH_FEED';

export function fetchFeed(context = null, limit = 10) {
  return (dispatch) => {
    const params = {
      context: context,
      limit: limit
    };
    return Axios.get('/feed.json', params).then((posts) => {
      return dispatch({
        type: FETCH_FEED,
        posts: posts
      })
    })
  };
}
