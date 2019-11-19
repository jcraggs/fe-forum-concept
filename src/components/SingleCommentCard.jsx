import React from "react";
import "../index.css";
import { Link } from "@reach/router";

class SingleCommentCard extends React.Component {
  render() {
    return (
      <div className="IndivCommentCard">
        <p className="userCommentBox">
          <Link className="userCommentLink" to={`/user/${this.props.author}`}>
            {this.props.author}
          </Link>{" "}
          on {new Date(this.props.date).toLocaleDateString()}
        </p>
        <p className="commentContent">{this.props.content}</p>
        <p>Upvote</p>
        <p>Votes: </p>
        <p>Downvote</p>
      </div>
    );
  }
}
export default SingleCommentCard;
