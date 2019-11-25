import React from "react";
import "../index.css";

class UpvoteItem extends React.Component {
  render() {
    if (this.props.changeval && this.props.upLimit) {
      if (this.props.changeval === this.props.upLimit)
        return (
          <span className="upvoteButton" role="img" aria-label="upvote">
            🔘
          </span>
        );
    }

    return (
      <span className="upvoteButton" role="img" aria-label="upvote">
        ⬆️
      </span>
    );
  }
}

export default UpvoteItem;
