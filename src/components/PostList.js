/**
 * React
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * Functional Component because it accepts a single props object,
 * and returns a React element. Nothing more.
 */
const PostList = (props) => (
  <ul className="post-list">
    {props.posts.map((post) => (
      <div className="post" key={post.id}>
        <h1 className="post__heading">{post.title}</h1>
        <p className="post__body">{post.body}</p>
      </div>
    ))}
  </ul>
)

/**
 * Validation for the Component props.
 */
PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = ({ posts }, ownProps) => {
  return {
    posts
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, null)(PostList)
