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
 * Functional Component
 */
class Header extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav__link">Home</Link>
        {this.props.categories.map((category) => (
          <Link key={category.path} to={`/${category.path}`} className="nav__link">{category.name}</Link>
        ))}
        <Link to="/new-post" className="nav__link">New Post</Link>
      </nav>
    )
  }
}

/**
 * Validation for the Component props.
 */
Header.propTypes = {
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
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, null)(Header) 
