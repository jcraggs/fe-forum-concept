import React from "react";
import "../index.css";
// import * as api from "../api";

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