import React from "react";
import "../styles/about.css";
import players from "../images/players.jpg";
const About = () => {
  return (
    <main className="container-margin-padding-shadow">
      <div className="picture-container-fit">
        <img
          src={players}
          className="picture"
          alt="background showing three NBA players"
        ></img>
      </div>
      <article className="textbox-padding">
        <p>
          Hey everyone! My name is Khai Lai and I'm a 3rd year CS student at
          University of Denver.
        </p>
        <p>
          I love basketball and coding so I thought, you know, might as well
          combine those two hobbies together and do a project trying to predict
          basketball games! This website scrapes data from Basketball Reference
          and uses a Monte Carlo-like simulation process to predict the outcomes
          of the games!
        </p>
        <p>
          I don't make any money of this website, it is just a fun student
          project to help me learn full-stack web development :)
        </p>
      </article>
    </main>
  );
};

export default About;
