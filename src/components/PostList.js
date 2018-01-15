/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * Actions
 */
import { fetchPosts } from '../actions/posts'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <ul className="post-list">
        {this.props.posts.map((post) => (
          <article className="post" key={post.id}>
            <header className="post__header">
              <h1 className="post__heading">{post.title}</h1>
              <h2 className="post__byline">submitted by <span className="post__author">{post.author}</span></h2>
            </header>
            <p className="post__body">{post.body}</p>
          </article>
        ))}
      </ul>
    )
  }
}

/**
 * Validation for the Component props.
 */
PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
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
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
