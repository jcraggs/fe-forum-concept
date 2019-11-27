import React from "react";
import "../index.css";

class ArticleQuery extends React.Component {
  state = {
    selectedTopic: "",
    sortBy: "",
    orderBy: ""
  };
  render() {
    return (
      <div className="ArticleQuery">
        <select
          aria-label="Filter articles by topic"
          className="AQSelect"
          value={this.state.selectedTopic}
          onChange={event => {
            this.setState({ selectedTopic: event.target.value });
            this.props.updateSelectedTopic(event.target.value);
          }}
        >
          <option value={""} disabled>
            - Filter Topic -
          </option>
          <option value="coding">Coding</option>
          <option value="cooking"> Cooking</option>
          <option value="football">Football</option>
        </select>
        <select
          aria-label="Sort articles by query"
          className="AQSelect"
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

export default ArticleQuery;
