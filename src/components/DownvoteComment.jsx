import React from "react";
import "../index.css";

class DownvoteComment extends React.Component {
  render() {
    return (
      <span className="downvoteButton" role="img" aria-label="downvote">
        ⬇️
      </span>
    );
  }
}

export default DownvoteComment;
