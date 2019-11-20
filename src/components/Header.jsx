import React from "react";
import "../index.css";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1
          className="App-title"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Forum Concept
        </h1>
        {!this.props.user && (
          <button
            className="logInButton"
            onClick={() => {
              this.props.logIn("tickle122");
            }}
          >
            Log in
          </button>
        )}
        {this.props.user && (
          <button
            className="logInButton"
            onClick={() => {
              this.props.logOut();
            }}
          >
            Log out
          </button>
        )}
      </header>
    );
  }
}

export default Header;
