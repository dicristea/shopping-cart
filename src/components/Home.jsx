import React from "react";
import home from "../assets/title-adventure.jpeg";

const Home = ({ navigateToCatalog }) => (
  <div className="homepage-container">
    <span className="hero-img">
      <img src={home} alt="Three people on a snowy mountain adventure." />
    </span>
    <div className="hero-headline">
      <h1>For your wildest adventrues.</h1>
      <button className="hero-button" onClick={navigateToCatalog}>
        <h3>View the Collection</h3>
      </button>
    </div>
  </div>
);

export default Home;
