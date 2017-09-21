import React from "react";

class Logout extends React.Component {
  _logUserOut = () => {
    if (localStorage) {
      localStorage.removeItem("myblogJWT");
      this.props.updateUserLogin();
    }
  };
  render() {
    return (
        <a onClick={this._logUserOut}>Logout</a>
    );
  }
}

export default Logout;
