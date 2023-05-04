import React from "react";
import getCart from "../utils/GetCart";
import Card from "./Card";

const ShoppingCart = () => {
  const getShoppingCart = () => {
    let catalogArray = getCart().map((name, index) => {
      return <Card key={index} name={name} />;
    });
    return catalogArray;
  };

  return (
    <div>
      Shopping Cart PAGE
      {getShoppingCart()}
      <button>Purchase</button>
    </div>
  );
};

export default ShoppingCart;
