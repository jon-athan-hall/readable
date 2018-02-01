/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Redux
 */
import { connect } from 'react-redux'

class CommentList extends Component {
  render() {
    return (
      <ul className="comment-list">
        {this.props.comments.map((comment) => (
          <li key={comment.id} className="comment-list__item">
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
  comments: PropTypes.array.isRequired
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, null)(CommentList)
