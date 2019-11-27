import React from "react";
import "../index.css";

class CommentQuery extends React.Component {
  state = {
    sortBy: "",
    orderBy: ""
  };

  render() {
    return (
      <div className="commentQuery">
        <select
          aria-label="Sort comments by query"
          className="commentSelect"
          value={this.state.sortBy}
          onChange={event => {
            this.setState({ sortBy: event.target.value });
            this.props.updateSortBy(event.target.value);
          }}
        >
          <option value={""} disabled>
            - Sort by -
          </option>
          <option value="created_at">Date Posted</option>
          <option value="votes">Number of votes</option>
        </select>
        <select
          aria-label="Order comments by query (high/low)"
          className="commentSelect"
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
export default CommentQuery;
