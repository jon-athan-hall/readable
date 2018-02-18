/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Redux
 */
import { connect } from 'react-redux'

/**
 * Components
 */
import VoteMechanism from './VoteMechanism'

class CommentList extends Component {
  render() {
    return (
      <ul className="comment-list">
        {this.props.comments.map((comment) => (
          <li key={comment.id} className="comment-list__item">
            <VoteMechanism type="comment" id={comment.id} score={comment.voteScore} />
            <p className="comment-list__body">{comment.body}</p>
            <p className="comment-list__byline">submitted by <span className="comment-list__author">{comment.author}</span></p>
          </li>
        ))}
      </ul>
    )
  }
}

/**
 * Validation for the Component props.
 */
CommentList.propTypes = {
  postId: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  let comments = []
  comments = state.comments.filter((comment) => (comment.parentId === ownProps.postId))
  comments.sort((x, y) => (x.id < y.id))

  return {
    comments
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, null)(CommentList)
