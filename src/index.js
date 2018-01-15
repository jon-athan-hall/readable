/**
 * React
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.css';

/**
 * Redux
 */
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/**
 * Redux - Reducers
 */
import postsReducer from './reducers/posts'
import categoriesReducer from './reducers/categories'

import { addPost } from './actions/posts'

/**
 * Redux - Store
 */
const reducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer
})
const store = createStore(reducer)

window.store = store
window.addPost = addPost

/**
 * React - Render
 */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
