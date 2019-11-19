import React from "react";
import "../index.css";
import { Link } from "@reach/router";
import UpvoteArticle from "../components/UpvoteArticle";
import DownvoteArticle from "../components/DownvoteArticle";
import Loading from "../components/Loading";
import * as api from "../api";

class FullArticleCard extends React.Component {
  state = {
    isLoading: true,
    title: "",
    author: "",
    date: "",
    content: "",
    votes: "",
    topic: ""
  };

  componentDidMount() {
    api.getArticleInfo(this.props.urlInfo.article_id).then(data => {
      this.setState({
        title: data.title,
        author: data.author,
        date: data.created_at,
        content: data.body,
        votes: data.votes,
        topic: data.topic,
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="articlePageContainer">
          <Loading />;
        </div>
      );
    }
    return (
      <div className="fullArticle">
        <p className="aTitle">{this.state.title}</p>

        <Link className="aAuthor" to={`/user/${this.state.author}`}>
          {this.state.author}
        </Link>

        <p className="aDate">
          Posted on: {new Date(this.state.date).toLocaleDateString()}
        </p>
        <p className="aTopic">
          From:{" "}
          <Link
            className="topicLink"
            to={`/articles/topics/${this.state.topic}`}
          >
            {this.state.topic}
          </Link>{" "}
        </p>
        <UpvoteArticle />
        <p className="aVotes">Votes: {this.state.votes}</p>
        <DownvoteArticle />
        <p className="aContent">{this.state.content}</p>
      </div>
    );
  }
}

export default FullArticleCard;
