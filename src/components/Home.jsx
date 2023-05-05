import React from "react";
import home from "../assets/title-adventure.jpeg";

const Home = (navigateToCatalog) => {
  return (
    <>
      <img src={home} alt="" />
      <div>For your wildest adventrues.</div>
      <button className="container" onClick={() => navigateToCatalog()}>
        <h3 className="collections hover-underline-animation">Collections</h3>
      </button>{" "}
    </>
  );
};

export default Home;
