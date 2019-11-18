import React from "react";
import "../index.css";
import axios from "axios";
import SingleArticleCard from "../components/SingleArticleCard";

class ArticleCards extends React.Component {
  state = {
    articles: [
      //   {
      //     article_id: 33,
      //     author: "weegembump",
      //     comment_count: "6",
      //     created_at: "2018-05-30T15:59:13.341Z",
      //     title: "Seafood substitutions are increasing",
      //     topic: "cooking",
      //     votes: 0
      //   }
    ]
  };

  componentDidMount() {
    axios
      .get("https://forum-concept.herokuapp.com/api/articles")
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  }

  render() {
    return (
      <div className="articleCard">
        {console.log(this.state.articles)}
        <ul>
          {this.state.articles.map(article => {
            return (
              <li key={article.article_id}>
                <SingleArticleCard articleTitle={article.title} />
              </li>
            );
            // return <li>{article.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default ArticleCards;
