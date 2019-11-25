import React from "react";
import "../index.css";
import SingleArticleCard from "../components/SingleArticleCard";
import Loading from "../components/Loading";
import * as api from "../api";
import ErrorMsg from "../components/ErrorMsg";

class ArticleCards extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    api
      .getAllArticles(
        this.props.topicParam,
        this.props.sortByParam,
        this.props.orderByParam,
        this.props.authorParam
      )
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

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      api
        .getAllArticles(
          this.props.topicParam,
          this.props.sortByParam,
          this.props.orderByParam,
          this.props.authorParam
        )
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

  triggerError = err => {
    this.setState({ error: err });
  };

  render() {
    if (this.state.error !== null) return <ErrorMsg error={this.state.error} />;
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        <ul className="articleCards">
          {this.state.articles.map(article => {
            return (
              <li className="articleListItems" key={article.article_id}>
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
export default ArticleCards;
