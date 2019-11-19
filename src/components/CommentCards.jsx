import React from "react";
import "../index.css";
import * as api from "../api";
import SingleCommentCard from "../components/SingleCommentCard";

class CommentCards extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    api.getAllComments(this.props.urlInfo.article_id).then(data => {
      this.setState({ comments: data, isLoading: false });
    });
  }

  render() {
    return (
      <div>
        <ul className="commentCards">
          {this.state.comments.map(comment => {
            return (
              <li key={comment.comment_id}>
                <SingleCommentCard
                  author={comment.author}
                  votes={comment.votes}
                  date={comment.created_at}
                  content={comment.body}
                  comment_id={comment.comment_id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentCards;
