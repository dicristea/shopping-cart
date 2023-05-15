import React from "react";
import fetchCart from "../utils/fetchCart";
import Card from "./Card";
import "../styles/Catalog.css";
import "../styles/Card.css";
import CatalogArray from "../utils/Catalog";

const ShoppingCart = () => {
  // array of catalog item names
  let catalogItemNames = CatalogArray.map((item) => item.name);

  const checkName = (array) => {
    // filters for arrays with array[0] (name) which is found in our catalog
    if (catalogItemNames.includes(array[0])) {
      return array;
    }
  };

  const getShoppingCart = () => {
    if (localStorage !== null) {
      // Filtered Array of Arrays created from localstorage objects i.e. [[brown_jacket, 2], [yellow_jacket, 1]]
      let localCart = Object.entries(fetchCart()).filter(checkName);

      let finalCart = localCart.map((itemArray) => {
        let itemIndex = catalogItemNames.findIndex(
          (arrayItem) => arrayItem === itemArray[0]
        );
        let finalItem = CatalogArray[itemIndex];
        finalItem.quantity = itemArray[1];
        return finalItem;
      });

      let visibleCart = finalCart.map((item) => (
        <Card key={item.name} item={item} inCart={true} />
      ));
      return visibleCart;

      // final need to be Array of Final cart objects
    } else {
      return "Your Shopping Bag is empty. View our Collection!";
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Shopping Bag</h2>
      <div className="card-holder">{getShoppingCart()}</div>
      <button className="purchase">PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default ShoppingCart;
