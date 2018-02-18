/**
 * React
 */
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

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
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route exact path="/new-post" component={PostForm} />
          <Route exact path="/:category/:id/edit" component={PostForm} />
          <Route exact path="/:category/:id" component={Post} />
          <Route exact path="/:category" component={PostList} />
        </Switch>
      </div>
    )
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default App
