/**
 * React
 */
import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Redux
 */
import { connect } from 'react-redux'

/**
 * Functional Component
 */
const Header = (props) => {
  return (
    <nav>
      <Link to="new" className="nav__link" activeClassName="nav__link--active">New Post</Link>
    </nav>
  )
}

export default Header
