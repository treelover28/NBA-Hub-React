import React from "react";
import logo from "../images/logo.gif";
import "../styles/ballspin.css";
import "../styles/margin-padding.css";
class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerMessage:
        "Simulation process may take up to 5 minutes. Hang on in there!",
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
    // display new message every 3 seconds...
    window.setInterval(this.advanceMessageIndex, 3000);
    return (
      <div className="margin-padding-10px flex-column">
        <h3 className="header">{this.state.headerMessage}</h3>
        <div className="flex-row">
          <img
            src={logo}
            alt="Loading screen logo-spinning basketball"
            className="spinning site-logo left center"
          ></img>
          <h3 className="right">
            {this.state.loadingMessages[this.state.messageIndex]}
          </h3>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
