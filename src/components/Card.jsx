import React, { useState } from "react";
import "../styles/Card.css";
import Bag from "../assets/shopping-bag-white-add.png";
import fetchItem from "../utils/fetchItem";
import x from "../assets/remove-x.png";

const Card = ({ item, inCart, updateItemQuantity, updateCart }) => {
  const [quantityToBuy, setQuantityToBuy] = useState(1);
  const [itemQuantityCART, setItemQuantityCART] = useState(item.quantity);

  const addToCart = () => {
    let itemQuantity = fetchItem(`${item.name}`);

    if (itemQuantity !== null) {
      itemQuantity = Number(itemQuantity) + Number(quantityToBuy);
      if (itemQuantity > 0 && itemQuantity < 6) {
        localStorage.setItem(`${item.name}`, JSON.stringify(itemQuantity));
      } else {
        alert("Maximum Quantity is 5");
      }
    } else {
      localStorage.setItem(`${item.name}`, JSON.stringify(quantityToBuy));
    }
    updateItemQuantity();
  };

  const removeFromCart = () => {
    localStorage.removeItem(`${item.name}`);
    updateCart();
  };

  const decrement = () => {
    if (inCart && itemQuantityCART > 1) {
      setItemQuantityCART(itemQuantityCART - 1);
      localStorage.setItem(
        `${item.name}`,
        JSON.stringify(itemQuantityCART - 1)
      );
      updateCart();
    } else {
      setQuantityToBuy(quantityToBuy - 1);
    }
  };

  const increment = () => {
    if (inCart && itemQuantityCART < 5) {
      setItemQuantityCART(Number(itemQuantityCART) + 1);
      localStorage.setItem(
        `${item.name}`,
        JSON.stringify(Number(itemQuantityCART) + 1)
      );
      updateCart();
    } else {
      setQuantityToBuy(Number(quantityToBuy) + 1);
    }
  };

  return (
    <div className="card">
      <div className="image-container">
        <img src={item.img} alt={`${item.gender}'s ${item.name}.`} />
      </div>
      <div className="item-info container">
        <div className="item-text">
          <div className="item-name">
            {item.name
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </div>
          <div className="item-price">${item.price}</div>
        </div>
        {!inCart && (
          <div className="add-container">
            <div className="quantity">
              <button aria-label="minus-button" onClick={decrement}>
                -
              </button>
              <input
                id={`${item.name}-quantity`}
                name="catalog-quantity"
                type="number"
                min="1"
                max="5"
                step="1"
                value={quantityToBuy}
                readOnly
              />
              <button aria-label="plus-button" onClick={increment}>
                +
              </button>
            </div>
            <button className="add-to-cart" onClick={addToCart}>
              <img src={Bag} alt="Shopping Bag" />
            </button>
          </div>
        )}
        {inCart && (
          <div className="in-cart">
            <div className="quantity">
              Quantity:
              <button aria-label="minus-button" onClick={decrement}>
                -
              </button>{" "}
              <input
                id={`${item.name}-quantity`}
                name="cart-quantity"
                type="number"
                min="1"
                max="5"
                step="1"
                value={itemQuantityCART}
                readOnly
              />
              <button aria-label="plus-button" onClick={increment}>
                +
              </button>
            </div>
            <button className="remove-from-cart" onClick={removeFromCart}>
              <img src={x} alt="Remove" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
