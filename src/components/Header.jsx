import React from "react";
import Bag from "../assets/shopping-bag.png";
import logo from "../assets/Luxuriant-Logo/name-logo-circle.png";
import "../styles/Header.css";
import CartNumber from "./CartNumber";

const Header = ({
  navigateToHome,
  navigateToAbout,
  navigateToCatalog,
  navigateToCart,
}) => (
  <header className="header">
    <div className="title">
      <button className="container" onClick={navigateToHome}>
        <img src={logo} alt="Luxuriant" />
      </button>
    </div>
    <div className="pages">
      <button className="container" onClick={navigateToAbout}>
        <h3 className="about hover-underline-animation">About</h3>
      </button>
      <button className="container" onClick={navigateToCatalog}>
        <h3 className="collections hover-underline-animation">Collections</h3>
      </button>
    </div>
    <div>
      <button className="container bag-icon-container" onClick={navigateToCart}>
        <img src={Bag} alt="Shopping Bag" />
        <CartNumber />
      </button>
    </div>
  </header>
);

export default Header;