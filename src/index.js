/**
 * React
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

/**
 * Redux
 */
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/**
 * Reducers
 */
import postsReducer from './reducers/posts'
import categoriesReducer from './reducers/categories'

/**
 * Redux Store
 */
const reducer = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer
})
const store = createStore(reducer)

/**
 * Initial React render
 */
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
