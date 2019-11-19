import React from "react";
import "../index.css";
// import * as api from "../api";

class DownvoteArticle extends React.Component {
  render() {
    return (
      <p className="downvoteButton">
        <span role="img" aria-label="downvote">
          ⬇️
        </span>
      </p>
    );
  }
}

export default DownvoteArticle;
