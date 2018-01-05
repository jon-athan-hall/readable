/**
 * Import actions for Posts
 */
import {
  ADD_POST
} from '../actions/posts'

/**
 * Reducer for Posts
 */
const posts = (state = {}, action) => {
  switch (action.type) {
    case ADD_POST:
      const { post } = action
      return {
        ...state,
        posts: [...state.posts, post]
      }
    default:
      return state
  }
}

export default posts
