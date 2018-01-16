/**
 * React
 */
import React, { Component } from 'react'
import uuidv1 from "uuid"
import { connect } from 'react-redux'

/**
 * Actions
 */
import { fetchCategories } from '../actions/categories'
import { addPost } from '../actions/posts'

/**
 * Controlled Component because all form input changes are updated by React,
 * instead of the DOM.
 */
class PostForm extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Post Title',
      body: '',
      author: 'username',
      category: 'board-games'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.resetForm()
    this.props.fetchCategories()
  }

  handleChange(e) {
    const target = e.target
    this.setState({
      [target.name]: target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const id = uuidv1()
    const timestamp = Date.now()
    const { title, body, author, category } = this.state
    this.props.addPost({ id, timestamp, title, body, author, category })
    this.props.history.push('/')
  }

  resetForm() {
    this.setState({
      title: 'Post Title',
      body: '',
      author: 'username',
      category: 'board-games'
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="title">Title</label>
          <input className="form__input" name="title" type="text" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="body">Body</label>
          <textarea className="form__textarea" name="body" value={this.state.body} onChange={this.handleChange} />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="author">Author</label>
          <input className="form__input" name="author" type="text" value={this.state.author} onChange={this.handleChange} />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="category">Category</label>
          <select className="form__select" name="category" value={this.state.category} onChange={this.handleChange}>
            {this.props.categories.map((category) => (
              <option className="form__option" value={category.path} key={category.path}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="form__group">
          <button className="form__button form__button--submit" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories
  }
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    addPost: (post) => dispatch(addPost(post))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
