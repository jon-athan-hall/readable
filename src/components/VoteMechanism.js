/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Actions
 */
import { makeVote } from '../actions/posts'

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
    this.props.makeVote(this.props.id, direction)
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
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    makeVote: (id, direction) => dispatch(makeVote(id, direction))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(null, mapDispatchToProps)(VoteMechanism)
