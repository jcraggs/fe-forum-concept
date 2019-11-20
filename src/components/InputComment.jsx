import React from "react";
import "../index.css";

class InputComment extends React.Component {
  state = {};
  render() {
    return (
      <form className="inputCommentContainer">
        <textarea
          placeholder="Add a comment"
          className="inputCommentBox"
        ></textarea>
        <button
          className="commentSubmitButton"
          onClick={event => {
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
