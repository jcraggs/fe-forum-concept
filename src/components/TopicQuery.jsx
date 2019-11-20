import React from "react";
import "../index.css";

class TopicQuery extends React.Component {
  render() {
    return (
      <div className="ArticleQuery">
        <select
          className="AQSelect"
          onChange={event => {
            this.props.updateSortBy(event.target.value);
          }}
        >
          <option value="created_at">- Sort by - </option>
          <option value="created_at">Date Posted</option>
          <option value="comment_count">Number of comments</option>
          <option value="votes">Number of votes</option>
        </select>
        <select
          className="AQSelect"
          onChange={event => {
            this.props.updateOrder(event.target.value);
          }}
        >
          <option value="desc">- Order by -</option>
          <option value="desc">High > Low</option>
          <option value="asc">Low > High</option>
        </select>
      </div>
    );
  }
}
export default TopicQuery;
