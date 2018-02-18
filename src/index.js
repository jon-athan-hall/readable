/**
 * React
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './index.css';

/**
 * Actions
 */
import { fetchPosts } from './actions/posts'
import { fetchCategories } from './actions/categories'

/**
 * Redux
 */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

/**
 * Redux - Reducers
 */
import postsReducer from './reducers/posts'
import commentsReducer from './reducers/comments'
import categoriesReducer from './reducers/categories'

/**
 * Redux - Store
 */
const reducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  categories: categoriesReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))
store.dispatch(fetchPosts())
store.dispatch(fetchCategories())

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
