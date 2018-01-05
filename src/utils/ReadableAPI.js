const baseURL = 'http://localhost:3001'
const token = 'jon-athan-hall' // Necessary but can be anything.
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getPosts = () =>
  fetch(`${baseURL}/posts`, {
    headers
  }).then(res => res.json())
