import React from "react";
import "../index.css";

class Loading extends React.Component {
  render() {
    return (
      <main className="loading">
        <img
          id="loader"
          src="http://www.xuefeiyang.com/assets/loader/loader.gif"
          alt="loading"
        />
      </main>
    );
  }
}
export default Loading;
