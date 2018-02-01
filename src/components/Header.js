/**
 * React
 */
import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Functional Component
 */
const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__link">Home</Link>
      <Link to="new" className="nav__link">New Post</Link>
    </nav>
  )
}

export default Header
