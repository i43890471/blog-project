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
    console.log("putting");
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
        console.log("EDIT RESPONSE: ", response);
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
      <div className="container">
        <form
          className="form-horizontal"
          role="form"
          onSubmit={this._handleEditPost}
        >
          <h2 className="text-center ">Edit Your Article</h2>

          <div className="form-group">
            <label for="firstName" className="col-sm-3 control-label">
              TITLE
            </label>

            <div className="col-sm-9">
              <input
                className="form-control"
                type="text"
                name="title"
                onChange={this._handleInputChange}
                value={this.state.title}
              />
            </div>
          </div>

          <div className="form-group">
            <label for="content" className="col-sm-3 control-label">
              CONTENT
            </label>

            <div className="col-sm-9">
              <textarea
                className="form-control"
                rows="6"
                name="content"
                onChange={this._handleInputChange}
                value={this.state.content}
              />

              <span className="help-block">Description of your article</span>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-4 col-sm-offset-4">
              <button type="submit" className="btn btn-info btn-block">
                Edit Post
              </button>
            </div>

            <div className="col-sm-4 ">
              <button
                type="submit"
                className="btn btn-danger btn-block"
                onClick={this._handleDeletePost}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPost;
