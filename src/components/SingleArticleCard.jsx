import React from "react";
import "../index.css";

class SingleArticleCard extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <p>{this.props.articleTitle}</p>
      </div>
    );
  }
}
export default SingleArticleCard;
