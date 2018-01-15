import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Action types for Posts
 */
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'

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
