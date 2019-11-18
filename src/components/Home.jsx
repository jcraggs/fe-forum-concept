import React from "react";
import "../index.css";
import ArticleQuery from "../components/ArticleQuery";
import LogInSubTitle from "../components/LogInSubTitle";
import ArticleCards from "../components/ArticleCards";

class Home extends React.Component {
  render() {
    return (
      <div className="homePageContainer">
        <ArticleQuery />
        <LogInSubTitle />
        <ArticleCards />
      </div>
    );
  }
}
export default Home;
