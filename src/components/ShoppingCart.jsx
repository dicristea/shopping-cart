import React, { useState, useEffect } from "react";
import fetchCart from "../utils/fetchCart";
import inCatalog from "../utils/inCatalog";
import CATALOG from "../utils/Catalog";
import "../styles/Catalog.css";
import "../styles/Card.css";
import "../styles/Cart.css";
import Card from "./Card";

const ShoppingCart = ({ itemQuantity, updateItemQuantity }) => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState();

  const updateCart = () => {
    updateItemQuantity();
    const localStorage = fetchCart();

    const shoppingCart = Object.keys(localStorage).filter(inCatalog);
    setCart(shoppingCart);
  };

  const calculateSubtotal = () => {
    const localStorage = fetchCart();
    const totalPrice = Object.keys(localStorage)
      .filter(inCatalog)
      .map((itemKey) => CATALOG[itemKey].price)
      .reduce(
        (accumulator, currentValue) =>
          Number(accumulator) + Number(currentValue)
      );
    setSubtotal(`${totalPrice}`);
  };

  useEffect(() => {
    updateCart();
    calculateSubtotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Bag</h2>
        <div className="cart header-h-line"></div>
      </div>
      <div className="cart-display">
        <div className="cart card-holder">
          {cart.map((itemKey) => (
            <Card
              key={itemKey}
              item={{ ...CATALOG[itemKey], quantity: localStorage[itemKey] }}
              inCart={true}
              updateCart={updateCart}
            />
          ))}
          {!localStorage && "Your Shopping Bag is Empty. View our Collection!"}
        </div>
        <div className="order-summary">
          <div className="summary-header">
            <h3>Order Summary</h3>
            <span>{itemQuantity} Items</span>
          </div>
          <span className="h-line"></span>
          <div className="items">
            <div>Subtotal: </div>
            <div>${subtotal}</div>
          </div>
          <div className="items">
            <div>Sales Tax: </div>
            <div>To be calculated</div>
          </div>
          <span className="h-line"></span>
          <div className="items">
            <div>Total:</div>
            <div>${subtotal}</div>
          </div>
          <button className="purchase">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
