import React from "react";
// import logo from "../images/bball-logo.svg";
import logo from "../images/logo.gif";
import "../styles/banner.css";
import "../styles/ballspin.css";
const Banner = () => {
  return (
    <header className="banner">
      <img
        src={logo}
        className="site-logo"
        alt="website logo. An orange basketball."
      ></img>

      <div className="banner-title-container">
        <h1 className="banner-title">NBA HUB</h1>
      </div>
    </header>
  );
};

export default Banner;
