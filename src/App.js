import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    user: undefined
  };

  componentDidMount() {
    if (localStorage.user) {
      this.setState({ user: localStorage.user });
    }
  }

  logUserOut = () => {
    localStorage.removeItem("user");
    this.setState({ user: undefined });
  };

  logUserIn = selectedUser => {
    localStorage.setItem("user", selectedUser);
    this.setState({ user: selectedUser });
  };

  render() {
    return (
      <div className="App">
        <Header
          user={this.state.user}
          logOut={this.logUserOut}
          logIn={this.logUserIn}
        />
        <Main user={this.state.user} />
        <Footer />
      </div>
    );
  }
}

export default App;
