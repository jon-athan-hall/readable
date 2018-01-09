/**
 * Import actions for Posts
 */
import {
  GET_ALL_POSTS,
  ADD_POST
} from '../actions/posts'

/**
 * Reducer for Posts
 */
const posts = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.posts
    case ADD_POST:
      const { post } = action
      return state.push(post)
    default:
      return state
  }
}

export default posts
