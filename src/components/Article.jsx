import React from "react";
import "../index.css";
import FullArticleCard from "../components/FullArticleCard";
import LogInSubTitle from "../components/LogInSubTitle";
import CommentCards from "../components/CommentCards";
import InputComment from "../components/InputComment";

class Article extends React.Component {
  render() {
    return (
      <div className="ArticleAndCommentsContainer">
        <FullArticleCard urlInfo={this.props} />
        <LogInSubTitle />
        <InputComment />
        <CommentCards urlInfo={this.props} />
      </div>
    );
  }
}
export default Article;
