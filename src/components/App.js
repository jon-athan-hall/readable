/**
 * React
 */
import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

/**
 * Redux
 */
import { connect } from 'react-redux'

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
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/new" component={PostForm} />
        <Route exact path="/posts/:id" component={Post} />
      </div>
    )
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default App
