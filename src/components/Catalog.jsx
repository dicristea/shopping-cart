import React from "react";
import "../styles/Catalog.css";
import "../styles/Card.css";
import Card from "./Card";

import "../styles/Card.css";
import CatalogArray from "../utils/Catalog";

const Catalog = () => {
  const displayCatalog = () => {
    let catalogArray = CatalogArray.map((name, index) => {
      return <Card key={index} name={name} />;
    });
    return catalogArray;
  };

  return (
    <div className="catalog-page-container">
      <h2 className="catalog-header">Explore our top picks.</h2>
      <div className="card-holder">{displayCatalog()}</div>
    </div>
  );
};

export default Catalog;
