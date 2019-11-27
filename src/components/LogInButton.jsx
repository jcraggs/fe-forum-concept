import React from "react";
import { Link } from "@reach/router";

const LogInButton = props => {
  if (props.uri === "/log-in" || props.user) return null;
  return (
    <Link path="/*" to="/log-in">
      <button className="logInButton">Log in</button>
    </Link>
  );
};

export default LogInButton;
