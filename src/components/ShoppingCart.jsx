import React from "react";
import fetchCart from "../utils/fetchCart";
import Card from "./Card";
import "../styles/Catalog.css";
import "../styles/Card.css";
import "../styles/Cart.css";
import inCatalog from "../utils/inCatalog";
import CATALOG from "../utils/Catalog";
import CartNumber from "./CartNumber";

const ShoppingCart = () => {
  const localStorage = fetchCart();

  let shoppingCart = Object.keys(localStorage)
    .filter(inCatalog)
    .map((itemKey) => (
      <Card
        key={itemKey}
        item={{ ...CATALOG[itemKey], quantity: localStorage[itemKey] }}
        inCart={true}
      />
    ));

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Bag</h2>
        <div className="cart header-h-line"></div>
      </div>
      <div className="cart-display">
        <div className="cart card-holder">
          {shoppingCart}
          {!localStorage && "Your Shopping Bag is Empty. View our Collection!"}
        </div>
        <div className="order-summary">
          <div className="summary-header">
            <h3>Order Summary</h3>
            <span>
              <CartNumber /> Items
            </span>
          </div>
          <span className="h-line"></span>
          <div>Subtotal: </div>
          <div>Sales Tax: </div>
          <span className="h-line"></span>
          <div>Total:</div>
          <button className="purchase">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
