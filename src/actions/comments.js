import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Action types for Comments
 */
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS'
export const MAKE_COMMENT_VOTE_SUCCESS = 'MAKE_COMMENT_VOTE_SUCCESS'

/**
 * Action creators for Comments
 */
export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  comments
})

export const removeCommentSuccess = (comment) => ({
  type: REMOVE_COMMENT_SUCCESS,
  comment
})

export const makeCommentVoteSuccess = (comment) => ({
  type: MAKE_COMMENT_VOTE_SUCCESS,
  comment
})

/**
 * Asynchronous action creators that return functions instead of objects, thanks to thunk.
 * Other action creators are then dispatched from within these functions.
 */
export const fetchComments = (id) => (dispatch) => (
  ReadableAPI
    .getComments(id)
    .then((comments) => {
      dispatch(fetchCommentsSuccess(comments))
    })
)

export const removeComment = (id) => (dispatch) => (
  ReadableAPI
    .deleteComment(id)
    .then((comment) => {
      dispatch(removeCommentSuccess(comment))
    })
)

export const makeCommentVote = (id, direction) => (dispatch) => (
  ReadableAPI
    .changeCommentScore(id, direction)
    .then((comment) => {
      dispatch(makeCommentVoteSuccess(comment))
    })
) 
