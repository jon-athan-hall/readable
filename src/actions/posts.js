import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Action types for Posts
 */
export const FETCH_POSTS_SUCCESS    = 'FETCH_POSTS_SUCCESS'
export const ADD_POST_SUCCESS       = 'ADD_POST_SUCCESS'
export const EDIT_POST_SUCCESS      = 'EDIT_POST_SUCCESS'
export const REMOVE_POST_SUCCESS    = 'REMOVE_POST_SUCCESS'
export const MAKE_POST_VOTE_SUCCESS = 'MAKE_POST_VOTE_SUCCESS'

/**
 * Action creators for Posts
 */
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  posts
})

export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  post
})

export const editPostSuccess = (post) => ({
  type: EDIT_POST_SUCCESS,
  post
})

export const removePostSuccess = (post) => ({
  type: REMOVE_POST_SUCCESS,
  post
})

export const makePostVoteSuccess = (post) => ({
  type: MAKE_POST_VOTE_SUCCESS,
  post
})

/**
 * Asynchronous action creators that return functions instead of objects, thanks to thunk.
 * Other action creators are then dispatched from within these functions.
 */
export const fetchPosts = () => (dispatch) => (
  ReadableAPI
    .getPosts()
    .then((posts) => {
      dispatch(fetchPostsSuccess(posts))
    })
)

export const addPost = ({ id, timestamp, title, body, author, category }) => (dispatch) => (
  ReadableAPI
    .createPost({ id, timestamp, title, body, author, category })
    .then((post) => {
      dispatch(addPostSuccess(post))
    })
)

export const editPost = (id, { title, body }) => (dispatch) => (
  ReadableAPI
    .updatePost(id, { title, body })
    .then((post) => {
      dispatch(editPostSuccess(post))
    })
)

export const removePost = (id) => (dispatch) => (
  ReadableAPI
    .deletePost(id)
    .then((post) => {
      dispatch(removePostSuccess(post))
    })
)

export const makePostVote = (id, direction) => (dispatch) => (
  ReadableAPI
    .changePostScore(id, direction)
    .then((post) => {
      dispatch(makePostVoteSuccess(post))
    })
)
