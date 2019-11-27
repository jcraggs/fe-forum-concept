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

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.comment !== "") {
      this.submitComment();
      this.setState({ comment: "" });
    }
  };

  render() {
    return (
      <form className="inputCommentContainer" onSubmit={this.handleSubmit}>
        <textarea
          aria-label="Comment box"
          value={this.state.comment}
          placeholder="Add a comment"
          className="inputCommentBox"
          onChange={event => {
            this.setState({ comment: event.target.value });
          }}
          required
        ></textarea>
        <button className="commentSubmitButton" type="submit">
          Submit Comment
        </button>
      </form>
    );
  }
}

export default InputComment;
