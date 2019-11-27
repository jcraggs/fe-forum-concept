import React from "react";
import "../index.css";

class TopicQuery extends React.Component {
  state = {
    sortBy: "",
    orderBy: ""
  };

  render() {
    return (
      <div className="ArticleQuery">
        <select
          aria-label="Sort articles by query"
          value={this.state.sortBy}
          className="AQSelect"
          onChange={event => {
            this.setState({ sortBy: event.target.value });
            this.props.updateSortBy(event.target.value);
          }}
        >
          <option value={""} disabled>
            - Sort by -
          </option>
          <option value="created_at">Date Posted</option>
          <option value="comment_count">Number of comments</option>
          <option value="votes">Number of votes</option>
        </select>
        <select
          aria-label="Order articles by query (high/low)"
          className="AQSelect"
          value={this.state.orderBy}
          onChange={event => {
            this.setState({ orderBy: event.target.value });
            this.props.updateOrder(event.target.value);
          }}
        >
          <option value={""} disabled>
            - Order by -
          </option>
          <option value="desc">High > Low</option>
          <option value="asc">Low > High</option>
        </select>
      </div>
    );
  }
}
export default TopicQuery;
