import React from "react";
import logo from "../images/logo.gif";
import "../styles/ballspin.css";
import "../styles/margin-padding.css";
class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingMessages: [
        "Flying players out",
        "Setting up the court",
        "Reading scouting reports",
        "Streching muscles",
        "Tying shoeslaces",
        "Pre-game shootaround",
        "Fancy handshakes and pregame rituals",
        "Fueling with Gatorade",
        "Flying 360 Tomahawk",
        "Fixing broken backboard",
      ],
      messageIndex: 0,
    };
  }

  advanceMessageIndex = () => {
    let nextIndex = this.state.messageIndex + 1;
    if (nextIndex >= this.state.loadingMessages.length) {
      nextIndex = 0;
    }
    this.setState({ messageIndex: nextIndex });
  };

  render() {
    window.setInterval(this.advanceMessageIndex, 1500);
    return (
      <div className="margin-padding-10px flex">
        <img
          src={logo}
          alt="Loading screen logo-spinning basketball"
          className="spinning site-logo left"
        ></img>
        <h3 className="right">
          {this.state.loadingMessages[this.state.messageIndex]}
        </h3>
      </div>
    );
  }
}

export default LoadingScreen;
