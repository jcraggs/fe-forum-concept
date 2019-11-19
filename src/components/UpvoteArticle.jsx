import React from "react";
import "../index.css";
// import * as api from "../api";

class UpvoteArticle extends React.Component {
  render() {
    return (
      <span className="upvoteButton" role="img" aria-label="upvote">
        ⬆️
      </span>
    );
  }
}

export default UpvoteArticle;
