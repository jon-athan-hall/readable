/**
 * Import actions for Comments
 */
import {
  FETCH_COMMENTS_SUCCESS,
} from '../actions/comments'

const initialState = []

/**
 * Reducer for comments
 */
const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.comments
    default:
      return state
  }
}

export default comments
