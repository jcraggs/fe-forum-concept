import React from "react";
import "../index.css";
import SingleArticleCard from "../components/SingleArticleCard";
import Loading from "../components/Loading";
import * as api from "../api";

class ArticleCards extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.getAllArticles().then(data => {
      this.setState({ articles: data, isLoading: false });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      api
        .getAllArticles(
          this.props.topicParam,
          this.props.sortByParam,
          this.props.orderByParam
        )
        .then(data => {
          this.setState({ articles: data, isLoading: false });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div>
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
export default ArticleCards;
