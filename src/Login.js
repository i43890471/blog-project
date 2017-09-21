import React from "react";
import axios from "axios";
import "./App.css";
import { Route, Link } from 'react-router-dom';

class Login extends React.Component {
  _handleUserLogin = event => {
    event.preventDefault();

    axios
      .post("/api/auth/", {
        identifier: this.state.username,
        password: this.state.password
      })
      .then(response => {        
        const { data } = response;
        if (localStorage) {
          localStorage.setItem("myblogJWT", data.token);
          this.props.updateUserLogin()
        }

      })
      .catch(({response }) => { 
        alert(JSON.stringify(response.data.errors));
      });
  };

  _handleInputChange = event => {
    const { name } = event.target;
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="row">
          <div className="container">
      <form className="form-group form-signin" onSubmit={this._handleUserLogin}>
        <h1 className="text-center login-title">Login</h1>
        <input
        className="form-control"
          type="text"
          name="username"
          placeholder="Email"
          onChange={this._handleInputChange}
        />
        <input
        className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          onChange={this._handleInputChange}
        />
        <div className="form-group"><button className="btn btn-lg btn-primary btn-block" type="submit">Login</button></div>
      </form>
      </div>
      </div>
    );
  }
}

export default Login;
