import React from "react";
import "../styles/Header.css";

const Header = ({ count, bestScore, resetGame }) => {
  return (
    <header className="header">
      <div className="title">
        <div className="horizontal" />
        <h1>Luxurious Luxury</h1>
        <div className="horizontal" />
      </div>
      <div className="description">
        <button className="shopping-cart" onClick={() => resetGame()}>
          Shopping Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
