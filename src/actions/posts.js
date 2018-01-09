/**
 * Action types for Posts
 */
export const GET_ALL_POSTS = 'GET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'

/**
 * Action creators for Posts
 */
export const getAllPosts = (posts) => ({
  type: GET_ALL_POSTS,
  posts
})

export const addPost = ({ id, timestamp, title, body, author, category }) => ({
  type: ADD_POST,
  id,
  timestamp,
  title,
  body,
  author,
  category
})
