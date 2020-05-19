import React from "react";
import "../styles/simulationResult.css";
const SimulationResult = (props) => {
  return (
    <article className="textbox-padding">
      <h2 className="heading">Simulation Result</h2>
      {props.noGame ? (
        <div>
          <br></br>
          <h3>{props.message}</h3>
          <br></br>
        </div>
      ) : (
        <div>
          <div className="result-container">
            <section className="team">
              <img
                src={props.homeLogo}
                className="nba-logo"
                alt="home team logo"
              ></img>
              <div className="result">
                <h3>{props.home + " " + props.homeSeason}</h3>
                <h3>Predicted Score: </h3>
                <h4>{props.homeScore}</h4>
                <h3>Predicted Win Probablity: </h3>
                <h4>{props.homeProbs}</h4>
              </div>
            </section>
            <section className="team">
              <img
                src={props.awayLogo}
                alt="away team logo"
                className="nba-logo"
              ></img>
              <div className="result">
                <h3>{props.away + " " + props.awaySeason}</h3>
                <h3>Predicted Score: </h3>
                <h4>{props.awayScore}</h4>
                <h3>Predicted Win Probablity: </h3>
                <h4>{props.awayProbs}</h4>
              </div>
            </section>
          </div>
          <h3>Overtime Probablity: {props.overtime} </h3>
        </div>
      )}
    </article>
  );
};

export default SimulationResult;
