import React from "react";
import "../index.css";
import * as api from "../api";

class InputComment extends React.Component {
  state = { comment: "" };

  render() {
    return (
      <form className="inputCommentContainer">
        <textarea
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
            if (this.state.comment !== "") {
              api
                .postComment(
                  this.props.article_id,
                  this.props.user,
                  this.state.comment
                )
                .then(data => {
                  this.props.updateCommentCards(data);
                });
              this.setState({ comment: "" });
            }
            event.preventDefault();
          }}
        >
          Submit Comment
        </button>
      </form>
    );
  }
}

export default InputComment;
