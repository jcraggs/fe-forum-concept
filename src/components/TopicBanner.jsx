import React from "react";
import "../index.css";

class TopicBanner extends React.Component {
  state = {
    sortBy: undefined,
    orderBy: undefined
  };
  render() {
    return (
      <div className="ArticleQuery">
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
export default TopicBanner;
