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
 * Actions
 */
import { removePost } from '../actions/posts'

/**
 * Components
 */
import VoteMechanism from './VoteMechanism'

class PostList extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      sortBy: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleClick(postId) {
    this.props.removePost(postId)
  }

  handleSort(sortBy) {
    this.setState({
      sortBy
    })
  }

  render() {
    let posts = this.props.posts

    switch (this.state.sortBy) {
    case 'time':
      posts.sort((x, y) => (x.timestamp < y.timestamp))
      break
    case 'score':
      posts.sort((x, y) => (x.voteScore < y.voteScore))
      break
    default:
      break
    }

    return (
      <div>
        <div className="sort-options">
          <span className="sort-options__heading">Sort by:</span>
          <button onClick={() => this.handleSort('time')} className="sort-options__link">Most Recent</button>
          <button onClick={() => this.handleSort('score')} className="sort-options__link">Highest Score</button>
        </div>
        <ul className="post-list">
          {this.props.posts.map((post) => (
            <li key={post.id} className="post-list__item">
              <VoteMechanism type="post" id={post.id} score={post.voteScore} />
              <h1><Link to={`/${post.category}/${post.id}`} className="post-list__title">{post.title}</Link></h1>
              <h2 className="post-list__byline">submitted by <span className="post-list__author">{post.author}</span></h2>
              <div className="post-list__info">
                <span className="post-list__comments">{post.commentCount} comment{post.commentCount !== 1 && 's'}</span>
                <Link to={`/${post.category}/${post.id}/edit`} className="post-list__link">Edit</Link>
                <button onClick={() => this.handleClick(post.id)} className="post-list__link">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

/**
 * Validation for the Component props.
 */
PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  sortby: PropTypes.string
}

/**
 * Directions to map parts of the Redux store to the Component props.
 */
const mapStateToProps = (state, ownProps) => {
  const category = ownProps.match.params.category
  let posts

  if (category) {
    posts = state.posts.filter((post) => (post.category === category))
  } else {
    posts = state.posts
  }

  posts.sort((x, y) => (x.id < y.id))

  return {
    posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removePost: (postId) => dispatch(removePost(postId))
  }
}

/**
 * Connect this Component to the Redux Store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(PostList)
