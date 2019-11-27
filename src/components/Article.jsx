import React from "react";
import "../index.css";
import FullArticleCard from "../components/FullArticleCard";
import LogInSubTitle from "../components/LogInSubTitle";
import CommentCards from "../components/CommentCards";
import ErrorMsg from "../components/ErrorMsg";

class Article extends React.Component {
  state = {
    sortBy: undefined,
    orderBy: undefined,
    error: null,
    commentError: null,
    isLoading: true
  };

  setIsLoading = () => {
    this.setState({ isLoading: false });
  };

  updateSortBy = param => {
    this.setState({ sortBy: param });
  };

  updateOrder = order => {
    this.setState({ orderBy: order });
  };

  triggerError = err => {
    this.setState({ error: err });
  };

  commentError = err => {
    this.setState({ commentError: err });
  };

  render() {
    if (this.state.error !== null) return <ErrorMsg error={this.state.error} />;
    if (this.state.commentError !== null) {
      return <ErrorMsg error={this.state.commentError} />;
    }
    return (
      <div className="ArticleAndCommentsContainer">
        <FullArticleCard
          urlInfo={this.props}
          triggerError={this.triggerError}
          setIsLoading={this.setIsLoading}
        />
        {!this.props.user && <LogInSubTitle />}
        <CommentCards
          urlInfo={this.props}
          user={this.props.user}
          sortByParam={this.state.sortBy}
          orderParam={this.state.orderBy}
          updateSortBy={this.updateSortBy}
          updateOrder={this.updateOrder}
          commentError={this.commentError}
        />
      </div>
    );
  }
}
export default Article;
