import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as ReadableAPI from './utils/ReadableAPI'
import './App.css'

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
          <div className="posts">
            {this.state.posts.map((post) => (
              <div className="post" key={post.id}>
                <h1 className="post__title">{post.title}</h1>
                <p className="post__body">{post.body}</p>
              </div>
            ))}
          </div>
        )}/>
      </div>
    )
  }
}

export default App;
