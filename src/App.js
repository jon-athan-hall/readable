import React, { Component } from 'react';
import * as ReadableAPI from './utils/ReadableAPI'
import './App.css';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    ReadableAPI.getPosts().then((posts) => {
      this.setState({ posts })
      console.log(posts)
    })
  }

  render() {
    return (
      <div className="app">
        <div className="posts">
          {this.state.posts.map((post) => (
            <div className="post" key={post.id}>
              <h1 className="post__title">{post.title}</h1>
              <p className="post__body">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
