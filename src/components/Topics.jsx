import React from "react";
import "../index.css";
import SingleArticleCard from "../components/SingleArticleCard";
import Loading from "../components/Loading";
import * as api from "../api";
import TopicQuery from "../components/TopicQuery";
import ErrorMsg from "../components/ErrorMsg";

class Topics extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sortBy: undefined,
    orderBy: undefined,
    error: null
  };

  componentDidMount() {
    api
      .getAllArticles(this.props.topic)
      .then(data => {
        this.setState({
          articles: data,
          isLoading: false
        });
      })
      .catch(err => {
        this.triggerError({
          msg: err.response.data.msg,
          status: err.response.status
        });
      });
  }

  triggerError = err => {
    this.setState({ error: err });
  };

  updateSortBy = param => {
    this.setState({ sortBy: param });
  };

  updateOrder = order => {
    this.setState({ orderBy: order });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sortBy !== this.state.sortBy ||
      prevState.orderBy !== this.state.orderBy
    ) {
      api
        .getAllArticles(this.props.topic, this.state.sortBy, this.state.orderBy)
        .then(data => {
          this.setState({ articles: data, isLoading: false });
        })
        .catch(err => {
          this.triggerError({
            msg: err.response.data.msg,
            status: err.response.status
          });
        });
    }
  }

  render() {
    if (this.state.error !== null) return <ErrorMsg error={this.state.error} />;
    if (this.state.isLoading) {
      return (
        <div className="topicPageContainer">
          <Loading />
        </div>
      );
    }
    return (
      <div className="topicPageContainer">
        <h1 className="topicBannerTitle">Topic: {this.props.topic}</h1>
        <TopicQuery
          updateSortBy={this.updateSortBy}
          updateOrder={this.updateOrder}
        />
        <ul className="articleCards">
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
                <SingleArticleCard
                  articleTitle={article.title}
                  author={article.author}
                  commentCount={article.comment_count}
                  date={article.created_at}
                  votes={article.votes}
                  topic={article.topic}
                  article_id={article.article_id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
