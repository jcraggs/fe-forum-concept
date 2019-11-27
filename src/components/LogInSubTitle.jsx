import React from "react";
import "../index.css";
import { Link } from "@reach/router";

function LogInSubTitle() {
  return (
    <Link className="logInSubtitle" to="/log-in">
      Log in to comment on articles!
    </Link>
  );
}

export default LogInSubTitle;
