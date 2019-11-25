import React from "react";
import "../index.css";
import { Router } from "@reach/router";
import Home from "../components/Home";
import Article from "../components/Article";
import User from "../components/User";
import LogIn from "../components/LogIn";
import Topics from "../components/Topics";
import ErrorMsg from "../components/ErrorMsg";

class Main extends React.Component {
  render() {
    return (
      <main className="App-main">
        <Router className="router">
          <Home path="/" />
          <Article path="/articles/:article_id" user={this.props.user} />
          <Topics path="/articles/topics/:topic" />
          <User path="/user/:user_id" />
          <LogIn path="/log-in" logIn={this.props.logIn} />
          <ErrorMsg
            path="/*"
            error={{
              msg: `Error '${window.location.href}' is not a valid route`,
              status: 404
            }}
          />
        </Router>
      </main>
    );
  }
}

export default Main;
