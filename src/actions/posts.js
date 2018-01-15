import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Action types for Posts
 */
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const ADD_POST = 'ADD_POST'

/**
 * Action creators for Posts
 */
export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  posts
})

export const addPost = ({ id, timestamp, title, body, author, category }) => ({
  type: ADD_POST,
  post: {
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
})

/**
 * Asynchronous action creator that returns a function instead of an object, thanks to thunk.
 * Other action creators are then dispatched from within this function.
 */
export const fetchPosts = () => (dispatch) => (
  ReadableAPI
    .getPosts()
    .then((posts) => {
      dispatch(fetchPostsSuccess(posts))
    })
)
