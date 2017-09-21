import React from 'react';
import Login from './Login';
import Signup from './Signup';

class LoginScreen extends React.Component {

  render() {
    return (
      <div>
        <Login updateUserLogin={this.props.updateUserLogin} />
        <Signup updateUserLogin={this.props.updateUserLogin} />
      </div>
    )
  }
}

export default LoginScreen;
