import React from "react";
import axios from "axios";
import "./App.css";
class CreatePost extends React.Component {

  state = {
    title: '',
    content: '',
  }

  _handleInputChange = event => {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "/api/posts/create",
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
      .then(res => {
        this.setState({
          title: "",
          content: ""
        });
        this.props.onCreate();
      })
      .catch(err => alert("err"));
  };

  render() {
    return (
      /*<form onSubmit={this._handleSubmit}> 
        <input type="text" name="title" onChange={this._handleInputChange} value={this.state.title} />
        <textarea name="content" onChange={this._handleInputChange} value={this.state.content}  />
        <input type="submit" title="Submit" />*/

        <div className="container">
            <form className="form-horizontal" role="form" onSubmit={this._handleSubmit}>
                <h2 className="text-center ">Create Your Article</h2>
                <div className="form-group">

                    <label for="firstName" className="col-sm-3 control-label">TITLE</label>
                    <div className="col-sm-9">

                    <input className="form-control" type="text" name="title" onChange={this._handleInputChange} value={this.state.title} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="content" className="col-sm-3 control-label">CONTENT</label>
                    <div className="col-sm-9">
                    <textarea className="form-control" rows="12" name="content" onChange={this._handleInputChange} value={this.state.content} />
                        <span className="help-block">Description of your article</span>
                    </div>
                </div>
               
             
                <div className="form-group">
                    <div className="col-sm-9 col-sm-offset-3">
                        <button type="submit" className="btn btn-primary btn-block">Publish</button>
                    </div>
                </div>
            </form> 
        </div> 

      //</form>
    );
  }
}

export default CreatePost;
