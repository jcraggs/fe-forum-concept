import React from "react";
import "../index.css";
import { Link } from "@reach/router";
import UpvoteArticle from "../components/UpvoteArticle";
import DownvoteArticle from "../components/DownvoteArticle";

class SingleArticleCard extends React.Component {
  render() {
    return (
      <div className="IndivArticleCard">
        <Link className="userBox" to={`/user/${this.props.author}`}>
          {this.props.author}
        </Link>

        <UpvoteArticle />

        <p className="dateBox">
          Posted: {new Date(this.props.date).toLocaleDateString()}
        </p>

        <p className="voteBox">Votes: {this.props.votes}</p>

        <Link className="titleBox" to={`/articles/${this.props.article_id}`}>
          {this.props.articleTitle}
        </Link>

        <DownvoteArticle />

        <p className="topicBox">
          From:{" "}
          <Link
            className="topicLink"
            to={`/articles/topics/${this.props.topic}`}
          >
            {this.props.topic}
          </Link>{" "}
        </p>

        <Link className="commentBox" to={`/articles/${this.props.article_id}`}>
          <span role="img" aria-label="comments">
            💬 {this.props.commentCount} comments
          </span>
        </Link>
      </div>
    );
  }
}
export default SingleArticleCard;
