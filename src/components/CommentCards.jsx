import React from "react";
import "../index.css";
import * as api from "../api";
import SingleCommentCard from "../components/SingleCommentCard";
import InputComment from "../components/InputComment";
import ErrorMsg from "../components/ErrorMsg";
import Loading from "../components/Loading";
import CommentQuery from "../components/CommentQuery";

class CommentCards extends React.Component {
  state = {
    comments: [],
    isLoading: true,
    error: null
  };

  fetchCommentData = () => {
    api
      .getAllComments(
        this.props.urlInfo.article_id,
        this.props.sortByParam,
        this.props.orderParam
      )
      .then(data => {
        this.setState({ comments: data, isLoading: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchCommentData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchCommentData();
    }
  }

  updateCommentCards = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  deleteComment = comment_id => {
    api.deleteCommentCard(comment_id);
    this.setState(currentState => {
      const newState = currentState.comments.filter(comment => {
        if (comment.comment_id === comment_id) {
          return false;
        }
        return true;
      });
      return { comments: newState };
    });
  };

  render() {
    if (this.state.error !== null) return <ErrorMsg error={this.state.error} />;
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        <CommentQuery
          updateSortBy={this.props.updateSortBy}
          updateOrder={this.props.updateOrder}
        />
        {this.props.user && (
          <InputComment
            article_id={this.props.urlInfo.article_id}
            updateCommentCards={this.updateCommentCards}
            user={this.props.user}
          />
        )}
        <ul className="commentCards">
          {this.state.comments.map(comment => {
            return (
              <li className="commentList" key={comment.comment_id}>
                <SingleCommentCard
                  user={this.props.user}
                  author={comment.author}
                  votes={comment.votes}
                  date={comment.created_at}
                  content={comment.body}
                  comment_id={comment.comment_id}
                  deleteComment={this.deleteComment}
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
