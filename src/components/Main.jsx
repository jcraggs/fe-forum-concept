import React from "react";
import "../index.css";
import { Router } from "@reach/router";
import Home from "../components/Home";
import Article from "../components/Article";
import User from "../components/User";
import LogIn from "../components/LogIn";
import ErrorPage from "../components/ErrorPage";
import Topics from "../components/Topics";

class Main extends React.Component {
  render() {
    return (
      <main className="App-main">
        <Router className="router">
          <Home path="/" />
          <Article path="/articles/:article_id" user={this.props.user} />
          <Topics path="/articles/topics/:topic" />
          <User path="/user/:user_id" />
          <LogIn path="/log-in" />
          <ErrorPage path="/*" />
        </Router>
      </main>
    );
  }
}

export default Main;
