import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllPosts } from '../actions/posts'
import * as ReadableAPI from '../utils/ReadableAPI'
import Post from './Post'

class App extends Component {
  componentDidMount() {
    ReadableAPI.getPosts()
      .then((posts) => {
        this.props.getAllPosts(posts)
      })
  }

  render() {
    const { posts } = this.props

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="posts">
            {posts && posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
            <Link
              className="link--new-post"
              to="/posts/new"
            >Create a New Post</Link>
          </div>
        )}/>
        <Route path="/posts/new" render={() => (
          <div>
            <h1>Create a New Post</h1>
          </div>
        )}/>
      </div>
    )
  }
}

/**
 * Directions to map the Redux store to the Component props.
 */
function mapStateToProps({ posts }, ownProps) {
  return {
    posts
  }
}

/**
 * Directions to map the dispatch method to the Component props.
 */
function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: (data) => dispatch(getAllPosts(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
