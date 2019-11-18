import React from "react";
import "../index.css";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Forum Concept</h1>
        <button className="logInButton">Log in</button>
      </header>
    );
  }
}

export default Header;
