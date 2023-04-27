import React from "react";
import "../styles/Header.css";
import marinesLogo from "../assets/MarineLogo.webp";
import worldGovLogo from "../assets/world-gov-logo.png";

const Header = ({ count, bestScore, resetGame }) => {
  return (
    <div className="header">
      <div className="top-header">
        <img className="marines" src={marinesLogo} alt="Logo of the Marines." />
        <div className="scoreboard">
          <h3 className="current-score">
            Score <div>{count}</div>
          </h3>
          <div className="vertical"></div>
          <h3 className="best-score">
            Best Score <div>{bestScore}</div>
          </h3>
        </div>
      </div>
      <div className="title">
        <div className="horizontal" />
        <h1>Job Board: Wanted Pirates</h1>
        <div className="horizontal" />
      </div>
      <div className="description">
        <img src={worldGovLogo} alt="Logo of the World Government." />
        <div>
          <p>This is a memory game!</p>
          <p>
            Get points by clicking on a poster but don't click on any more than
            once!
          </p>
        </div>
        <button className="reset-btn game-reset" onClick={() => resetGame()}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Header;
