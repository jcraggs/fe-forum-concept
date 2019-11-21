import React from "react";
import "../index.css";
import Loading from "../components/Loading";
import * as api from "../api";

class UserCard extends React.Component {
  state = {
    isLoading: true,
    user: undefined,
    avatar: undefined,
    irl_name: undefined
  };

  componentDidMount() {
    api.getUserData(this.props.user_id).then(data => {
      this.setState({
        user: data.user.username,
        avatar: data.user.avatar_url,
        irl_name: data.user.name,
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div className="userCardContainer">
        <h1 className="userTitle">
          {this.state.user} ({this.state.irl_name})
        </h1>
        <img className="userImg" alt="userAvatar" src={this.state.avatar}></img>
        <p className="userArticleTitle">Articles by {this.state.user}:</p>
      </div>
    );
  }
}

export default UserCard;
