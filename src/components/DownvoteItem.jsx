import React from "react";
import "../index.css";

class DownvoteItem extends React.Component {
  render() {
    if (this.props.changeval && this.props.downLimit) {
      if (this.props.changeval === this.props.downLimit)
        return (
          <span className="upvoteButton" role="img" aria-label="upvote">
            🔘
          </span>
        );
    }

    return (
      <span className="downvoteButton" role="img" aria-label="downvote">
        ⬇️
      </span>
    );
  }
}

export default DownvoteItem;
