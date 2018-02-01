import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Action types for Comments
 */
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'

/**
 * Action creators for Comments
 */
export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  comments
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
    .catch((error) => {
      throw(error)
    })
)
