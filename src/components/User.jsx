import React from "react";
import "../index.css";
import UserCard from "../components/UserCard";
import ArticleCards from "./ArticleCards";

class User extends React.Component {
  render() {
    return (
      <div className="homePageContainer">
        <UserCard user_id={this.props.user_id} />
        <ArticleCards authorParam={this.props.user_id} />
      </div>
    );
  }
}
export default User;
