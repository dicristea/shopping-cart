import React from "react";
import "../styles/Card.css";

const Popup = ({ resetGame }) => {
  return (
    <div className="reset-popup overlay">
      <div className="reset-message">
        You've selected that poster already.
        <button className="resetBtn" onClick={resetGame()}>
          Try Again?
        </button>
      </div>
    </div>
  );
};

export default Popup;
