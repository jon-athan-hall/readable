import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as ReadableAPI from '../utils/ReadableAPI'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    ReadableAPI.getPosts().then((posts) => {
      this.setState({ posts })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <div className="posts">
              {this.state.posts.map((post) => (
                <div className="post" key={post.id}>
                  <h1 className="post__title">{post.title}</h1>
                  <p className="post__body">{post.body}</p>
                </div>
              ))}
            </div>
            <Link
              className="link--new-post"
              to="/posts/new"
            >Create a New Post</Link>
          </div>
        )}/>
        <Route path="/posts/new" render={() => (
          <div>
            <h1>Create a New Post</h1>
          </div>
        )}/>
      </div>
    )
  }
}

export default App;
