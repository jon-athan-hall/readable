/**
 * Action types for Posts
 */
export const ADD_POST = 'ADD_POST'

/**
 * Action creators for Posts
 */
export const addPost = ({ id, timestamp, title, body, author, category }) => ({
  type: ADD_POST,
  id,
  timestamp,
  title,
  body,
  author,
  category
})
