import React from "react";
import "../index.css";

class LogIn extends React.Component {
  state = {
    selectedUser: ""
  };
  render() {
    return (
      <div className="logInContainer">
        <h1 className="logInTitleMsg">Log in to the website:</h1>
        <section className="userSelectContainer">
          <select
            id="userSelect"
            className="userSelect"
            value={this.state.selectedUser}
            onChange={event => {
              this.setState({ selectedUser: event.target.value });
            }}
          >
            <option value={""} disabled>
              - Select user -
            </option>
            <option value="cooljmessy">cooljmessy</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="jessjelly">jessjelly</option>
            <option value="tickle122">tickle122</option>
            <option value="weegembump">weegembump</option>
          </select>
          <button
            className="submitLogin"
            disabled={!this.state.selectedUser}
            onClick={() => {
              if (this.state.selectedUser) {
                this.props.logIn(this.state.selectedUser);
                window.history.back();
              }
            }}
          >
            Log in
          </button>
        </section>
      </div>
    );
  }
}
export default LogIn;
