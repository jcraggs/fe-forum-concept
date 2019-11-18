import React from "react";
import "../index.css";

class ArticleQuery extends React.Component {
  state = {
    selectedTopic: undefined,
    sortBy: undefined,
    orderBy: undefined
  };
  render() {
    return (
      <div className="ArticleQuery">
        <select className="AQSelect">
          <option value="all">- Filter Topic - </option>
          <option value="coding">Coding</option>
          <option value="cooking"> Cooking</option>
          <option value="football">Football</option>
        </select>
        <select className="AQSelect">
          <option value="--">- Sort by - </option>
          <option value="date">Date Posted</option>
          <option value="comments">Number of comments</option>
          <option value="votes">Number of votes</option>
        </select>
        <select className="AQSelect">
          <option value="--">- Order by -</option>
          <option value="highToLow">High > Low</option>
          <option value="LowToHigh">Low > High</option>
        </select>
      </div>
    );
  }
}
export default ArticleQuery;
