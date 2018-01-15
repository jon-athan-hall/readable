/**
 * React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * Actions
 */
import { fetchPosts } from '../actions/posts'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <ul className="post-list">
        {this.props.posts.map((post) => (
          <div className="post" key={post.id}>
            <h1 className="post__heading">{post.title}</h1>
            <p className="post__body">{post.body}</p>
          </div>
        ))}
      </ul>
    )
  }
}

/**
 * Validation for the Component props.
 */
PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

/**
 * Directions to map particular dispatch methods to the Component props.
 */
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
