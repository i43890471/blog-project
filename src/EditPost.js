import React from "react";
import axios from "axios";

class EditPost extends React.Component {
  state = {
    title: this.props.post.title,
    content: this.props.post.content
  };

  _handleInputChange = event => {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value
    });
  };

  _handleEditPost = event => {
    event.preventDefault();
    const { post } = this.props;
    console.log('putting')
    axios
      .put(
        `/api/posts/${post.id}`,
        {
          title: this.state.title,
          content: this.state.content
        },
        {
          headers: {
            authorization: `Token ${localStorage.getItem("myblogJWT")}`
          }
        }
      )
      .then(response => {
        console.log('EDIT RESPONSE: ', response);
        if (response.data.success) {
          alert("Updated");
          this.props.onChange();
        }
      })
      .catch(err => console.log("ERR editing: ", err));
  };

  _handleDeletePost = event => {
    event.preventDefault();
    const { post } = this.props;

    axios
      .delete(`/api/posts/${post.id}`, {
        headers: {
          authorization: `Token ${localStorage.getItem("myblogJWT")}`
        }
      })
      .then(response => this.props.onChange())
      .catch(err => console.log("ERR deleting: ", err));
  };

  render() {
    const { post } = this.props;

    return (
      <div>
        <form onSubmit={this._handleEditPost}>
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this._handleInputChange}
          />
          <textarea
            value={this.state.content}
            name="content"
            onChange={this._handleInputChange}
          />
          <input type="submit" value="Edit Post" />
          <button onClick={this._handleDeletePost}>Delete post</button>
        </form>

       
      </div>
    );
  }
}

export default EditPost;
