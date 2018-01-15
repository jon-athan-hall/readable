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

/**
 * Categories
 */
export const getCategories = () =>
  fetch(`${baseURL}/categories`, {
    method: 'GET',
    headers
  }).then(res => res.json())
    .then(res => res.categories)
