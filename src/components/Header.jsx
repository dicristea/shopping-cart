import React from "react";
import Bag from "../assets/shopping-bag.png";
import logo from "../assets/luxuriant-logo/logo-transparent-png.png";
import "../styles/Header.css";

const Header = ({ navigateToCatalog, navigateToCart }) => {
  return (
    <header className="header">
      <div className="title">
        <img src={logo} alt="Luxuriant" />
      </div>
      <div className="pages">
        <button className="container" onClick={() => navigateToCatalog()}>
          <h3 className="about hover-underline-animation">About</h3>
        </button>
        <button className="container" onClick={() => navigateToCatalog()}>
          <h3 className="collections hover-underline-animation">Collections</h3>
        </button>
      </div>
      <div className="">
        <button className="container" onClick={() => navigateToCart()}>
          <img src={Bag} alt="Shopping Bag" />
        </button>
      </div>
    </header>
  );
};

export default Header;
