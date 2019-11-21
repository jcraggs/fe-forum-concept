import React from "react";
import "../index.css";
import FullArticleCard from "../components/FullArticleCard";
import LogInSubTitle from "../components/LogInSubTitle";
import CommentCards from "../components/CommentCards";
import CommentQuery from "./CommentQuery";

class Article extends React.Component {
  state = {
    sortBy: undefined,
    orderBy: undefined
  };

  updateSortBy = param => {
    this.setState({ sortBy: param });
    console.log("triggered sortby");
  };

  updateOrder = order => {
    this.setState({ orderBy: order });
    console.log("triggered order");
  };

  render() {
    return (
      <div className="ArticleAndCommentsContainer">
        <FullArticleCard urlInfo={this.props} />
        {!this.props.user && <LogInSubTitle />}
        <CommentQuery
          updateSortBy={this.updateSortBy}
          updateOrder={this.updateOrder}
        />
        <CommentCards
          urlInfo={this.props}
          user={this.props.user}
          sortByParam={this.state.sortBy}
          orderParam={this.state.orderBy}
        />
      </div>
    );
  }
}
export default Article;
