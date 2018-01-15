/**
 * React
 */
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

/**
 * API
 */
import * as ReadableAPI from '../utils/ReadableAPI'

/**
 * Actions
 */
import { getAllCategories } from '../actions/categories'

/**
 * Components
 */
import PostList from './PostList'
import PostForm from './PostForm'

class App extends Component {
  componentDidMount() {
    ReadableAPI.getCategories()
      .then((categories) => {
        this.props.getAllCategories(categories)
      })
  }

  render() {
    const { categories } = this.props

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <div className="categories">
              {categories && categories.map((category) => (
                <div className="category" key={category.path}>
                  <h2>{category.name}</h2>
                </div>
              ))}
            </div>
            <PostList />
            <Link
              className="link--new-post"
              to="/posts/new"
            >Create a New Post</Link>
          </div>
        )}/>
        <Route path="/posts/new" render={() => (
          <PostForm />
        )}/>
      </div>
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
    getAllCategories: (data) => dispatch(getAllCategories(data))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App)
