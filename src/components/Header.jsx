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
        {!window.location.href.match(/log-in/g) && !this.props.user ? (
          <button
            className="logInButton"
            onClick={() => {
              window.location.href = "/log-in";
            }}
          >
            Log in
          </button>
        ) : (
          ""
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
        {this.props.user && (
          <p className="welcomeMessage">
            Hello,{" "}
            <a className="userLinkHeader" href={`/user/${this.props.user}`}>
              {this.props.user}
            </a>
          </p>
        )}
      </header>
    );
  }
}

export default Header;
