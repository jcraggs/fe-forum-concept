import React from "react";
import "../index.css";
import { Link } from "@reach/router";
import UpvoteComment from "../components/UpvoteComment";
import DownvoteComment from "../components/DownvoteComment";
import * as api from "../api";

class SingleCommentCard extends React.Component {
  state = {
    changeval: 0,
    upLimit: 1,
    downLimit: -1
  };

  updateCommentVote = changeVoteVal => {
    if (changeVoteVal === 1) {
      if (this.state.changeval !== this.state.upLimit) {
        this.setState({
          changeval: this.state.changeval + 1
        });
        api.patchCommentVote(this.props.comment_id, changeVoteVal);
      }
    }
    if (changeVoteVal === -1) {
      if (this.state.changeval !== this.state.downLimit) {
        this.setState({
          changeval: this.state.changeval - 1
        });
        api.patchCommentVote(this.props.comment_id, changeVoteVal);
      }
    }
  };

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
        <div className="commentVotesContainer">
          <button
            className="upvoteButton"
            onClick={() => {
              this.updateCommentVote(1);
            }}
          >
            <UpvoteComment />
          </button>
          <p className="commentVotes">
            {this.props.votes + this.state.changeval}
          </p>
          <button
            className="downvoteButton"
            onClick={() => {
              this.updateCommentVote(-1);
            }}
          >
            <DownvoteComment />
          </button>
        </div>
      </div>
    );
  }
}
export default SingleCommentCard;
