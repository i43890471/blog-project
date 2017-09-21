import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import axios from "axios";

import LoginScreen from './LoginScreen';
import UserPage from './UserPage';
import Logout from './Logout';
import GetPosts from './GetPosts';

class App extends Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount = () => {
    this._checkUserLogin();
  };

  _checkUserLogin = () => {
    if (localStorage) {
      const token = localStorage.getItem("myblogJWT");
      if (token) {
        axios
          .get("/api/auth/", {
            headers: {
              authorization: `Token ${token}`
            }
          })
          .then(res =>
            this.setState({
              isLoggedIn: res.data.isLoggedIn,
              user: res.data.user
            })
          );
      } else {
        if (this.state.isLoggedIn) {
          this.setState({ isLoggedIn: false })
        }
      }
    }
  };

  render() {
    const { isLoggedIn, user } = this.state;
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">My Personal Blog</Link>
          </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/login">My Account</Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Logout updateUserLogin={this._checkUserLogin} />
                </li>
              )}
            </ul>
            </div>
            
          </nav>

              <Switch>

              <Route path='/login' render={() => (
                isLoggedIn ? <Redirect to='/user' /> : <LoginScreen updateUserLogin={this._checkUserLogin} />
              )} />

              <Route path='/user' render={() => (
                isLoggedIn ? <UserPage user={user} /> : <Redirect to='/login' />
              )} />

              <GetPosts />

              </Switch>

              
        </div>
      </Router>
    );
  }
}

export default App;
