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
        <button
          className="logInButton"
          onClick={() => {
            window.location.href = "/log-in";
          }}
        >
          Log in
        </button>
      </header>
    );
  }
}

export default Header;
