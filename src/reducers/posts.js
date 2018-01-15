/**
 * Import actions for Posts
 */
import {
  FETCH_POSTS_SUCCESS,
  ADD_POST
} from '../actions/posts'

const initialState = []

/**
 * Reducer for Posts
 */
const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts
    case ADD_POST:
      const { post } = action
      return [...state, post]
    default:
      return state
  }
}

export default posts