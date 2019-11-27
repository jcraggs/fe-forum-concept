import React from "react";
import "../index.css";
import { Link, Router } from "@reach/router";
import LogInButton from "./LogInButton";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <Link className="App-title_link" to="/">
          <h1 className="App-title">Forum concept</h1>
        </Link>
        <Router className="logInLinkContainer">
          <LogInButton default user={this.props.user} />
        </Router>
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
