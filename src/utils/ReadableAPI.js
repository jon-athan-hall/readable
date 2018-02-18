const baseURL = 'http://localhost:3001'
const token = 'jon-athan-hall' // Necessary but can be anything.
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
 * Posts
 */
export const getPosts = () =>
  fetch(`${baseURL}/posts`, {
    method: 'GET',
    headers
  }).then(res => res.json())

export const createPost = (post) => 
  fetch(`${baseURL}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

export const updatePost = (id, post) =>
  fetch(`${baseURL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

export const deletePost = (id) =>
  fetch(`${baseURL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())

export const changePostScore = (id, direction) =>
  fetch(`${baseURL}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: direction })
  }).then(res => res.json())

/**
 * Comments
 */
export const getComments = (id) =>
  fetch(`${baseURL}/posts/${id}/comments`, {
    method: 'GET',
    headers
  }).then(res => res.json())

export const deleteComment = (id) =>
  fetch(`${baseURL}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())

export const changeCommentScore = (id, direction) =>
  fetch(`${baseURL}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: direction })
  }).then(res => res.json())

/**
 * Categories
 */
export const getCategories = () =>
  fetch(`${baseURL}/categories`, {
    method: 'GET',
    headers
  }).then(res => res.json())
    .then(res => res.categories)
