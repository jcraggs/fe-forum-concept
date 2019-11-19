import React from "react";
import "../index.css";
import FullArticleCard from "../components/FullArticleCard";
import LogInSubTitle from "../components/LogInSubTitle";
import CommentCards from "../components/CommentCards";

class Article extends React.Component {
  render() {
    return (
      <div className="ArticleAndCommentsContainer">
        <FullArticleCard urlInfo={this.props} />
        <LogInSubTitle />
        <CommentCards urlInfo={this.props} />
      </div>
    );
  }
}
export default Article;
