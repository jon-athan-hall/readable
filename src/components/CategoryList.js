/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * Actions
 */
import { fetchCategories } from '../actions/categories'

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <ul className="category-list">
        {this.props.categories.map((category) => (
          <li className="category-list__category" key={category.path}>{category.name}</li>
        ))}
      </ul>
    )
  }
}

/**
 * Validation for the Component props.
 */
CategoryList.propTypes = {
  categories: PropTypes.array.isRequired
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
    fetchCategories: () => dispatch(fetchCategories())
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
