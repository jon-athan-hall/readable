/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * Actions
 */
import { fetchComments } from '../actions/comments'

/**
 * Components
 */
import CommentList from './CommentList'

class Post extends Component {
  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id)
  }

  render() {
    const post = this.props.post
    return (
      <article className="post">
        <header className="post__header">
          <h1 className="post__title">{post.title}</h1>
          <h2 className="post__byline">submitted by <span className="post__author">{post.author}</span></h2>
        </header>
        <p className="post__body">{post.body}</p>
        <CommentList />
      </article>
    )
  }
}

/**
 * Validation for the Component props.
 */
Post.propTypes = {
  post: PropTypes.object.isRequired,
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  let post = {}

  if (state.posts.length > 0) {
    post = state.posts.find((post) => post.id === id)
  }

  return {
    post
  }
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (postId) => dispatch(fetchComments(postId))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Post)
