import React from "react";
import "../index.css";

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="errorPageMsgContainer">
        <h1 className="errorPageMsg">Error:</h1>
        <p className="errorPageMsg">"{window.location.href}"</p>
        <p className="errorPageMsg"> is not a valid route.</p>
      </div>
    );
  }
}
export default ErrorPage;
