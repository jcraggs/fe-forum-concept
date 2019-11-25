import React from "react";
import "../index.css";
import * as api from "../api";

class InputComment extends React.Component {
  state = { comment: "" };

  submitComment() {
    api
      .postComment(this.props.article_id, this.props.user, this.state.comment)
      .then(data => {
        this.props.updateCommentCards(data);
      });
  }

  render() {
    return (
      <form className="inputCommentContainer">
        <textarea
          label="Comment box"
          value={this.state.comment}
          placeholder="Add a comment"
          className="inputCommentBox"
          onChange={event => {
            this.setState({ comment: event.target.value });
          }}
        ></textarea>
        <button
          className="commentSubmitButton"
          onClick={event => {
            event.preventDefault();
            if (this.state.comment !== "") {
              this.submitComment();
              this.setState({ comment: "" });
            }
          }}
        >
          Submit Comment
        </button>
      </form>
    );
  }
}

export default InputComment;
