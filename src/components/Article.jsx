import React from "react";
import "../index.css";
import FullArticleCard from "../components/FullArticleCard";
import LogInSubTitle from "../components/LogInSubTitle";
import CommentCards from "../components/CommentCards";
import CommentQuery from "../components/CommentQuery";
import ErrorMsg from "../components/ErrorMsg";

class Article extends React.Component {
  state = {
    sortBy: undefined,
    orderBy: undefined,
    error: null
  };

  updateSortBy = param => {
    this.setState({ sortBy: param });
  };

  updateOrder = order => {
    this.setState({ orderBy: order });
  };

  triggerError = err => {
    console.log(err);
    this.setState({ error: err });
  };

  render() {
    if (this.state.error !== null) return <ErrorMsg error={this.state.error} />;
    return (
      <div className="ArticleAndCommentsContainer">
        <FullArticleCard
          urlInfo={this.props}
          triggerError={this.triggerError}
        />
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
          triggerError={this.triggerError}
        />
      </div>
    );
  }
}
export default Article;
