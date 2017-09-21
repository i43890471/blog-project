import React from "react";
import axios from "axios";

import Post from './Post';

class GetPosts extends React.Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    axios
      .get("/api/posts/")
      .then(res => this.setState({ posts: res.data.posts }))
      .catch(err => console.log('err: ', err))
  }

  render() {
    return (
      <div>
        {
          this.state.posts.map(post => <Post key={post.id} post={post} isLoggedIn={true} />)
        }
      </div>
    )
  }
}

export default GetPosts;
