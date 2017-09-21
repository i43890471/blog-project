import React from "react";
import axios from "axios";
import CreatePost from './CreatePost';
import EditPost from "./EditPost";

class UserPage extends React.Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    this._getUserPosts();
  };

  _getUserPosts = () => {
    axios
    .get(`/api/posts/author/${this.props.user.id}`)
    .then(res => this.setState({ posts: res.data.posts }));
  }

  render() {
    return (
      <div>
        <CreatePost onCreate={this._getUserPosts} />


        <h2>Your posts</h2>
        {this.state.posts.map(post => <EditPost key={post.id} post={post} onChange={this._getUserPosts} />)}
      </div>
    );
  }
}

export default UserPage;
