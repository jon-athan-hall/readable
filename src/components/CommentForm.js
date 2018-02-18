/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

/**
 * Actions
 */
import { addComment, editComment } from '../actions/comments'

/**
 * Redux
 */
import { connect } from 'react-redux'

/**
 * Controlled Component because all form input changes are updated by React,
 * instead of the DOM.
 */
class CommentForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      comment: this.props.comment
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.comment.id !== nextProps.comment.id) {
      this.setState({ comment: nextProps.comment })
    }
  }

  handleChange(e) {
    const comment = this.state.comment
    comment[e.target.name] = e.target.value
    this.setState({ comment })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { body, author } = this.state.comment
    let id = this.state.comment.id
    const timestamp = Date.now()
    let parentId

    if (id) {
      this.props.editComment(id, { timestamp, body })
    } else {
      id = uuidv1()
      parentId = this.props.parentPost.id
      this.props.addComment({ id, timestamp, body, author, parentId })
    }

    this.props.history.push(`/${this.props.parentPost.category}/${this.props.parentPost.id}`)
  }

  render() {
    const comment = this.props.comment
    let submitText = (comment.id) ? 'Save' : 'Submit'

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form__group">
          <label htmlFor="body" className="form__label">Body</label>
          <textarea name="body" defaultValue={comment.body} onChange={this.handleChange} className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="author" className="form__label">Author</label>
          <input name="author" type="text" defaultValue={comment.author} onChange={this.handleChange} className="form__input" />
        </div>
        <div className="form__group">
          <button type="submit" className="form__button form__button--submit">{submitText}</button>
        </div>
      </form>
    )
  }
}

/**
 * Validation for the Component props.
 */
CommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  parentPost: PropTypes.object.isRequired
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  let parentId = ownProps.match.params.parentId
  let comment = {}
  let parentPost = {}

  if (id && state.comments.length) {
    comment = state.comments.find((comment) => comment.id === id)
    parentId = comment.parentId
  }
  
  if (parentId && state.posts.length) {
    parentPost = state.posts.find((post) => post.id === parentId)
  }

  return {
    comment,
    parentPost
  }
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (id, comment) => dispatch(editComment(id, comment))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
