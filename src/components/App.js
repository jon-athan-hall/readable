/**
 * React
 */
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

/**
 * Redux
 */
import { connect } from 'react-redux'

/**
 * Actions
 */
import { fetchPosts } from '../actions/posts'

/**
 * Components
 */
import CategoryList from './CategoryList'
import PostList from './PostList'
import Post from './Post'
import PostForm from './PostForm'

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <CategoryList />
            <PostList />
            <Link
              className="link--new-post"
              to="/new"
            >Create a New Post</Link>
          </div>
        )}/>
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/new" component={PostForm} />
        <Route path="/posts/:id" component={Post} />
      </div>
    )
  }
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(null, mapDispatchToProps)(App)
