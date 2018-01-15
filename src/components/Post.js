import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <article className="post">
        <header className="post__header">
          <h1 className="post__title">{post.title}</h1>
          <h2 className="post__byline">by {post.author}</h2>
        </header>
        <p className="post__body">{post.body}</p>
        <div className="post__score">{post.voteScore}</div>
        <div className="post__controls">
          <button>&#8593;</button>
          <button>&#8595;</button>
          <Link
            to="/"
            className="post__link--edit"
          >Edit</Link>
          <Link
            to="/"
            className="post__link--delete"
          >Delete</Link>
        </div>
      </article>
    )
  }
}

export default Post
