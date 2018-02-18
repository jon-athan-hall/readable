/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Actions
 */
import { makePostVote } from '../actions/posts'
import { makeCommentVote } from '../actions/comments'

/**
 * Redux
 */
import { connect } from 'react-redux'

class VoteMechanism extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(direction) {
    switch (this.props.type) {
      case "post":
        this.props.makePostVote(this.props.id, direction)
        break;
      case "comment":
        this.props.makeCommentVote(this.props.id, direction)
        break;
      default:
        this.props.makePostVote(this.props.id, direction)
    }
  }

  render() {
    return (
      <div className="vote-mechanism">
        <button onClick={() => this.handleClick('upVote')} className="vote-mechanism__button">&uarr;</button>
        <div className="vote-mechanism__score">{this.props.score}</div>
        <button onClick={() => this.handleClick('downVote')} className="vote-mechanism__button">&darr;</button>
      </div>
    )
  }
}

/**
 * Validation for the Component props.
 */
VoteMechanism.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    makePostVote: (id, direction) => dispatch(makePostVote(id, direction)),
    makeCommentVote: (id, direction) => dispatch(makeCommentVote(id, direction))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(null, mapDispatchToProps)(VoteMechanism)
