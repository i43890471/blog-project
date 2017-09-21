import React from "react";
import axios from "axios";
import "./App.css";
import Cardssample from "./common/Cards";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Post extends React.Component {

  state = {
    author: null,
  }

  componentDidMount() {
    axios
      .get(`/api/users/id/${this.props.post.author}`)
      .then(res => {
          this.setState({
            author: res.data.user
          })

        }
      )
      .catch(err => console.log(err));
  }

  render() {
    const { post } = this.props;
    console.log(this.state.author);
    return (
      <div>
        <MuiThemeProvider>
          <Cardssample post={post} author={this.state.author} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Post;

/*
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.author}</p>*/
