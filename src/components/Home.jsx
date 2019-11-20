import React from "react";
import "../index.css";
import ArticleQuery from "../components/ArticleQuery";
import LogInSubTitle from "../components/LogInSubTitle";
import ArticleCards from "../components/ArticleCards";

class Home extends React.Component {
  state = {
    selectedTopic: undefined,
    sortBy: "created_at",
    orderBy: "desc"
  };

  updateSelectedTopic = topic => {
    this.setState({ selectedTopic: topic });
  };

  updateSortBy = param => {
    this.setState({ sortBy: param });
  };

  updateOrder = order => {
    this.setState({ orderBy: order });
  };

  render() {
    return (
      <div className="homePageContainer">
        <ArticleQuery
          updateSelectedTopic={this.updateSelectedTopic}
          updateSortBy={this.updateSortBy}
          updateOrder={this.updateOrder}
        />
        <LogInSubTitle />
        <ArticleCards
          topicParam={this.state.selectedTopic}
          sortByParam={this.state.sortBy}
          orderByParam={this.state.orderBy}
        />
      </div>
    );
  }
}
export default Home;
