/**
 * Import actions for Posts
 */
import {
  FETCH_POSTS_SUCCESS,
  ADD_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  REMOVE_POST_SUCCESS,
  MAKE_VOTE_SUCCESS
} from '../actions/posts'

const initialState = []

/**
 * Reducer for Posts
 */
const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts
    case ADD_POST_SUCCESS:
      const { post } = action
      return [...state, post]
    case EDIT_POST_SUCCESS:
    case MAKE_VOTE_SUCCESS:
      return [
        ...state.filter(post => post.id !== action.post.id),
        action.post
      ]
    case REMOVE_POST_SUCCESS:
      return [
        ...state.filter(post => post.id !== action.post.id)
      ]
    default:
      return state
  }
}

export default posts
