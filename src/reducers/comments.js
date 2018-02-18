/**
 * Import actions for Comments
 */
import {
  FETCH_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  EDIT_COMMENT_SUCCESS,
  REMOVE_COMMENT_SUCCESS,
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
      return [
        ...state.filter(x => !comments.find(y => x.id === y.id)).concat(comments)
      ]
    case ADD_COMMENT_SUCCESS:
      const { comment } = action
      return[...state, comment]
    case EDIT_COMMENT_SUCCESS:
    case MAKE_COMMENT_VOTE_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        action.comment
      ]
    case REMOVE_COMMENT_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.comment.id)
      ]
    default:
      return state
  }
}

export default comments
