/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

/**
 * Actions
 */
import { fetchCategories } from '../actions/categories'
import { addPost, editPost } from '../actions/posts'

/**
 * Redux
 */
import { connect } from 'react-redux'

/**
 * Controlled Component because all form input changes are updated by React,
 * instead of the DOM.
 */
class PostForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      post: this.props.post,
      categories: this.props.categories
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id !== nextProps.post.id) {
      this.setState({ post: nextProps.post })
    }
  }

  handleChange(e) {
    const post = this.state.post
    post[e.target.name] = e.target.value
    this.setState({ post })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { title, body, author, category } = this.state.post
    let id = this.state.post.id
    let timestamp

    if (id) {
      this.props.editPost(id, { title, body })
    } else {
      id = uuidv1()
      timestamp = Date.now()
      this.props.addPost({ id, timestamp, title, body, author, category })
    }

    this.props.history.push('/')
  }

  render() {
    const post = this.props.post
    let submitText = (post.id) ? 'Save' : 'Submit'

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <div className="form__group">
          <label htmlFor="title" className="form__label">Title</label>
          <input name="title" type="text" defaultValue={post.title} onChange={this.handleChange} className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="body" className="form__label">Body</label>
          <textarea name="body" defaultValue={post.body} onChange={this.handleChange} className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="author" className="form__label">Author</label>
          <input name="author" type="text" defaultValue={post.author} onChange={this.handleChange} className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="category" className="form__label">Category</label>
          <select name="category" defaultValue={post.category} onChange={this.handleChange} className="form__input">
            {this.props.categories.map((category) => (
              <option className="form__option" value={category.path} key={category.path}>{category.name}</option>
            ))}
          </select>
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
PostForm.propTypes = {
  post: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  let post = {}

  if (id && state.posts.length) {
    post = state.posts.find((post) => post.id === id)
  }

  return {
    post,
    categories: state.categories
  }
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    addPost: (post) => dispatch(addPost(post)),
    editPost: (id, post) => dispatch(editPost(id, post))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
