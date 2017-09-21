import React from "react";
import axios from "axios";

class Signup extends React.Component {
  _handleUserSignup = event => {
    event.preventDefault();

    axios
      .post("/api/users/", {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        const { data } = response;
        if (response.data.user) {
          return Promise.resolve(response.data.user);
        }
      })
      .then(user => {
        return axios
          .post("/api/auth/", {
            identifier: user.username,
            password: this.state.password
          })
          .then(response => {
            const { data } = response;
            if (localStorage) {
              localStorage.setItem("myblogJWT", data.token);
              this.props.updateUserLogin();
            }
          }).catch(err => console.log('ERR', err));
      })
      .catch(err => {
        const { data } = err;
        console.dir(err)
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
      <form className="form-group form-signin" onSubmit={this._handleUserSignup}>
        <h1 className="text-center login-title">Signup</h1>
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="Username"
          onChange={this._handleInputChange}
        />
        <input
          className="form-control"
          type="email"
          name="email"
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
        <div className="form-group"><button className="btn btn-lg btn-primary btn-block" type="submit" >Signup</button></div>
      </form>
      </div>
      </div>
    );
  }
}

export default Signup;
