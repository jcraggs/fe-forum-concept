import React from "react";
import "../index.css";

class DownvoteArticle extends React.Component {
  render() {
    return (
      <span role="img" aria-label="downvote">
        ⬇️
      </span>
    );
  }
}

export default DownvoteArticle;
