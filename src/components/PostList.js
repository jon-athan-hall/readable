/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Redux
 */
import { connect } from 'react-redux'

class PostList extends Component {
  render() {
    return (
      <ul className="post-list">
        {this.props.posts.map((post) => (
          <li key={post.id} className="post-list__item">
            <Link to={`/posts/${post.id}`} className="post-list__title">{post.title}</Link>
            <h2 className="post-list__byline">submitted by <span className="post-list__author">{post.author}</span></h2>
          </li>
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
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, null)(PostList)
