import Immutable from 'immutable';
import {FETCH_FEED} from '../actions/feed';

const initialState = Immutable.fromJS({
  posts: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FEED:
      return state.merge(action.posts);
    default:
      return state;
  }
}
