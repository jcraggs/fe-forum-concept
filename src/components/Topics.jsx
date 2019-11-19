import React from "react";
import "../index.css";
import SingleArticleCard from "../components/SingleArticleCard";
import Loading from "../components/Loading";
import * as api from "../api";
import LogInSubTitle from "../components/LogInSubTitle";
import TopicBanner from "../components/TopicBanner";

class Topics extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    topicPage: ""
  };

  componentDidMount() {
    api.getAllArticles(this.props.topic).then(data => {
      this.setState({
        articles: data,
        isLoading: false,
        topicPage: this.props.topic
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="topicPageContainer">
          <Loading />
        </div>
      );
    }
    return (
      <div className="topicPageContainer">
        <h1 className="topicBannerTitle">Topic: {this.state.topicPage}</h1>
        <TopicBanner />
        <LogInSubTitle />
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
