import React, { Component } from 'react'

class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className="post">
        <h1 className="post__title">{post.title}</h1>
        <p className="post__body">{post.body}</p>
      </div>
    )
  }
}

export default Post
