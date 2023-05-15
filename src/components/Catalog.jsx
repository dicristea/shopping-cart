import React from "react";
import "../styles/Catalog.css";
import "../styles/Card.css";
import Card from "./Card";
import "../styles/Card.css";
import CatalogArray from "../utils/Catalog";

const Catalog = () => {
  const displayCatalog = () => {
    let catalogArray = CatalogArray.map((item, index) => {
      return <Card key={index} item={item} inCart={false} />;
    });
    return catalogArray;
  };

  return (
    <div className="catalog-container">
      <h2 className="catalog-header">Explore our top picks.</h2>
      <div className="card-holder">{displayCatalog()}</div>
    </div>
  );
};

export default Catalog;
