import React from "react";
import "../styles/Catalog.css";
import "../styles/Card.css";
import Card from "./Card";
import "../styles/Card.css";
import CATALOG from "../utils/Catalog";

const Catalog = () => (
  <div className="catalog-container">
    <div className="catalog-header">
      <h2>Explore our top picks.</h2>
      <div className="catalog header-h-line"></div>
    </div>
    <div className="card-holder">
      {Object.values(CATALOG).map((item, index) => (
        <Card key={index} item={item} inCart={false} />
      ))}
    </div>
  </div>
);

export default Catalog;
