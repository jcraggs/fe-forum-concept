import React from "react";
import "../index.css";

class SingleArticleCard extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className="IndivArticleCard">
        <p className="userBox">{this.props.author}</p>
        <button className="upvoteButton">
          <span role="img" aria-label="upvote">
            ⬆️
          </span>
        </button>
        <p className="dateBox">{this.props.date}</p>
        <p className="voteBox">Votes: {this.props.votes}</p>

        <p className="titleBox">{this.props.articleTitle} </p>
        <button className="downvoteButton">
          <span role="img" aria-label="downvote">
            ⬇️
          </span>
        </button>

        <p className="topicBox">From: {this.props.topic}</p>
        <p className="commentBox">
          <span role="img" aria-label="comments">
            💬
          </span>{" "}
          {this.props.commentCount}{" "}
        </p>
      </div>
    );
  }
}
export default SingleArticleCard;
