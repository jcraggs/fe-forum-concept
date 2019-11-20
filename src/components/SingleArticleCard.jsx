import React from "react";
import "../index.css";
import { Link } from "@reach/router";
import UpvoteArticle from "../components/UpvoteArticle";
import DownvoteArticle from "../components/DownvoteArticle";
import * as api from "../api";

class SingleArticleCard extends React.Component {
  state = {
    changeval: 0,
    upLimit: 1,
    downLimit: -1
  };

  updateArticleVote = changeVoteVal => {
    if (changeVoteVal === 1) {
      if (this.state.changeval !== this.state.upLimit) {
        this.setState({
          changeval: this.state.changeval + 1
        });
        api.patchArticleVote(this.props.article_id, changeVoteVal);
      }
    }
    if (changeVoteVal === -1) {
      if (this.state.changeval !== this.state.downLimit) {
        this.setState({
          changeval: this.state.changeval - 1
        });
        api.patchArticleVote(this.props.article_id, changeVoteVal);
      }
    }
  };

  render() {
    return (
      <div className="IndivArticleCard">
        <Link className="userBox" to={`/user/${this.props.author}`}>
          {this.props.author}
        </Link>

        <button
          className="upvoteButton"
          onClick={() => {
            this.updateArticleVote(1);
          }}
        >
          <UpvoteArticle />
        </button>

        <p className="dateBox">
          Posted: {new Date(this.props.date).toLocaleDateString()}
        </p>

        <p className="voteBox">
          Votes: {this.props.votes + this.state.changeval}
        </p>

        <Link className="titleBox" to={`/articles/${this.props.article_id}`}>
          {this.props.articleTitle}
        </Link>

        <button
          className="downvoteButton"
          onClick={() => {
            this.updateArticleVote(-1);
          }}
        >
          <DownvoteArticle />
        </button>

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
