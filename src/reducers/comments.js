/**
 * Import actions for Comments
 */
import {
  FETCH_COMMENTS_SUCCESS,
  MAKE_COMMENT_VOTE_SUCCESS
} from '../actions/comments'

const initialState = []

/**
 * Reducer for comments
 */
const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      const { comments } = action
      return state.filter(x => !comments.find(y => x.id === y.id)).concat(comments)
    case MAKE_COMMENT_VOTE_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        action.comment
      ]
    default:
      return state
  }
}

export default comments
