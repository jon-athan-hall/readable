/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * Actions
 */
import { fetchComments } from '../actions/comments'
import { removePost } from '../actions/posts'

/**
 * Components
 */
import CommentList from './CommentList'
import VoteMechanism from './VoteMechanism' 

/**
 * Redux
 */
import { connect } from 'react-redux'

class Post extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id)
  }

  handleClick() {
    this.props.removePost(this.props.post.id)
    this.props.history.push('/')
  }

  render() {
    const post = this.props.post
    return (
      <article className="post">
        {post.id && (<VoteMechanism type="post" id={post.id} score={post.voteScore} />)}
        <header className="post__header">
          <h1 className="post__title">{post.title}</h1>
          <h2 className="post__byline">submitted by <span className="post__author">{post.author}</span></h2>
        </header>
        <p className="post__body">{post.body}</p>
        <div className="post__info">
          <span className="post__comments">{post.commentCount} comment{post.commentCount !== 1 && 's'}</span>
          <Link to={`/${post.category}/${post.id}/edit`} className="post__link post__link--edit">Edit</Link>
          <button onClick={this.handleClick} className="post__link post__link--delete">Delete</button>
        </div>
        {post.id && (<CommentList postId={post.id} />)}
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
    fetchComments: (postId) => dispatch(fetchComments(postId)),
    removePost: (postId) => dispatch(removePost(postId))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Post)
