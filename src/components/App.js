/**
 * React
 */
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

/**
 * Components
 */
import CategoryList from './CategoryList'
import PostList from './PostList'
import PostForm from './PostForm'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <CategoryList />
            <PostList />
            <Link
              className="link--new-post"
              to="/posts/new"
            >Create a New Post</Link>
          </div>
        )}/>
        <Route path="/posts/new" render={() => (
          <PostForm />
        )}/>
      </div>
    )
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default App
