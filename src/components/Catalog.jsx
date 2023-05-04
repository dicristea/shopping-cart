import React from "react";
import Card from "./Card";

import "../styles/Card.css";
import CatalogArray from "../utils/Catalog";

const Catalog = () => {
  const displayCatalog = () => {
    let catalogArray = CatalogArray().map((name, index) => {
      return <Card key={index} name={name} />;
    });
    return catalogArray;
  };

  return <div className="card-holder">{displayCatalog()}</div>;
};

export default Catalog;
