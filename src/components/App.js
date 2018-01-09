import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

/**
 * API
 */
import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Actions
 */
import { getAllPosts } from '../actions/posts'
import { getAllCategories } from '../actions/categories'

/**
 * Components
 */
import Post from './Post'

class App extends Component {
  componentDidMount() {
    ReadableAPI.getPosts()
      .then((posts) => {
        this.props.getAllPosts(posts)
      })
    ReadableAPI.getCategories()
      .then((categories) => {
        this.props.getAllCategories(categories)
      })
  }

  render() {
    const { posts, categories } = this.props

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <div className="categories">
              {categories && categories.map((category) => (
                <div className="category" key={category.path}>
                  <h2>{category.name}</h2>
                </div>
              ))}
            </div>
            <div className="posts">
              {posts && posts.map((post) => (
                <Post post={post} key={post.id} />
              ))}
              <Link
                className="link--new-post"
                to="/posts/new"
              >Create a New Post</Link>
            </div>
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
function mapStateToProps({ posts, categories }, ownProps) {
  return {
    posts,
    categories
  }
}

/**
 * Directions to map the dispatch method to the Component props.
 */
function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: (data) => dispatch(getAllPosts(data)),
    getAllCategories: (data) => dispatch(getAllCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
