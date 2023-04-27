import React from "react";
import Card from "./Card";

import "../styles/Card.css";
import PostersArray from "../utils/PostersArray";
import WinnerGif from "../assets/winner.gif";

const Posters = ({
  onClick,
  gameOver,
  winner,
  updateGameStatus,
  resetScore,
}) => {
  const unshuffled = () => {
    let unshuffledArray = PostersArray().map((posterName, index) => {
      return (
        <Card
          key={index}
          name={posterName}
          onClick={onClick}
          gameOver={gameOver}
          updateGameStatus={updateGameStatus}
        />
      );
    });
    return unshuffledArray;
  };

  // Randomly shuffle an array using Math.random()
  const shuffle = () => {
    // let unshuffledArray = unshuffled()
    let shuffled = unshuffled()
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  };

  return (
    <div className="card-holder">
      {gameOver && (
        <div className="popup">
          <div className="reset message">
            You've selected that poster already.
            <button className="reset-btn" onClick={() => resetScore()}>
              Try Again?
            </button>
          </div>
        </div>
      )}
      {winner && (
        <div className="popup">
          <div className="winner message">
            <div>
              <img className="winner-gif" src={WinnerGif} alt="" />
              You've Won!
              <img className="winner-gif" src={WinnerGif} alt="" />
            </div>
            <div>
              <button className="reset-btn" onClick={() => resetScore()}>
                Keep Playing
              </button>
              <button className="reset-btn" onClick={() => resetScore()}>
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}
      {shuffle()}
    </div>
  );
};

export default Posters;
