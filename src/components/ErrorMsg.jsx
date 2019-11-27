import React from "react";
import "../index.css";

class ErrorMsg extends React.Component {
  render() {
    return (
      <div className="errorMsgContainer">
        {this.props.error.status === undefined && (
          <div>
            <p className="errorMsg">Server Error: item failed to load</p>
            <p className="errorMsg">Status: 500</p>
          </div>
        )}
        {this.props.error.status === 500 && (
          <div>
            {" "}
            <p className="errorMsg">
              Server {this.props.error.msg.name}: ({this.props.error.msg.code})
            </p>
            <p className="errorMsg">Status: {this.props.error.status}</p>
          </div>
        )}
        {this.props.error.status !== 500 &&
          this.props.error.status !== undefined && (
            <div>
              <p className="errorMsg">{this.props.error.msg}</p>
              <p className="errorMsg">Status: {this.props.error.status}</p>
            </div>
          )}
      </div>
    );
  }
}
export default ErrorMsg;
