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

/**
 * Actions
 */
import { removePost } from '../actions/posts'

/**
 * Components
 */
import VoteMechanism from './VoteMechanism'

class PostList extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, postId) {
    e.preventDefault();
    this.props.removePost(postId)
  }

  render() {
    return (
      <ul className="post-list">
        {this.props.posts.map((post) => (
          <li key={post.id} className="post-list__item">
            <VoteMechanism id={post.id} score={post.voteScore} />
            <h1><Link to={`/posts/${post.id}`} className="post-list__title">{post.title}</Link></h1>
            <h2 className="post-list__byline">submitted by <span className="post-list__author">{post.author}</span></h2>
            <div className="post-list__info">
              <span className="post-list__comments">{post.commentCount} comment{post.commentCount !== 1 && 's'}</span>
              <Link to={`/posts/${post.id}/edit`} className="post-list__link">Edit</Link>
              <a onClick={(e) => this.handleClick(e, post.id)} className="post-list__link">Delete</a>
            </div>
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
  const category = ownProps.match.params.category
  let posts

  if (category) {
    posts = state.posts.filter((post) => (post.category === category))
  } else {
    posts = state.posts
  }

  return {
    posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removePost: (postId) => dispatch(removePost(postId))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
