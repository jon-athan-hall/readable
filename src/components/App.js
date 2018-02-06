/**
 * React
 */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

/**
 * Components
 */
import Header from './Header'
import PostList from './PostList'
import Post from './Post'
import PostForm from './PostForm'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={PostList} />
        <Route exact path="/new-post" component={PostForm} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/posts/:id/edit" component={PostForm} />
      </div>
    )
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default App
