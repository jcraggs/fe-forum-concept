import React from "react";
import "../index.css";

function ArticleQuery(props) {
  return (
    <div className="ArticleQuery">
      <select
        className="AQSelect"
        onChange={event => {
          props.updateSelectedTopic(event.target.value);
        }}
      >
        <option value="">- Filter Topic -</option>
        <option value="coding">Coding</option>
        <option value="cooking"> Cooking</option>
        <option value="football">Football</option>
      </select>
      <select
        className="AQSelect"
        onChange={event => {
          props.updateSortBy(event.target.value);
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
          props.updateOrder(event.target.value);
        }}
      >
        <option value="desc">- Order by -</option>
        <option value="desc">High > Low</option>
        <option value="asc">Low > High</option>
      </select>
    </div>
  );
}

export default ArticleQuery;
