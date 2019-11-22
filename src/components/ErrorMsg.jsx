import React from "react";
import "../index.css";

class ErrorMsg extends React.Component {
  render() {
    return (
      <div className="errorMsgContainer">
        <p className="errorMsg">{this.props.error.msg}</p>
        <p className="errorMsg">Status: {this.props.error.status}</p>
      </div>
    );
  }
}
export default ErrorMsg;
