import React, { useState } from "react";
import "../styles/Card.css";
import Bag from "../assets/shopping-bag-white-add.png";
import fetchItem from "../utils/fetchItem";
import x from "../assets/remove-x.png";

const Card = ({ item, inCart }) => {
  const [quantityToBuy, setQuantityToBuy] = useState(1);

  const addToCart = () => {
    let itemQuantity = fetchItem(`${item.name}`);

    if (itemQuantity !== null) {
      itemQuantity = Number(itemQuantity) + Number(quantityToBuy);
      localStorage.setItem(`${item.name}`, JSON.stringify(itemQuantity));
    } else {
      localStorage.setItem(`${item.name}`, JSON.stringify(quantityToBuy));
    }
  };

  const removeFromCart = () => {
    localStorage.removeItem(`${item.name}`);
    window.location.reload(false); // useEffect to reload only shopping Cart
  };

  return (
    <div className="card">
      <div className="image container">
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
          <div className="add-to-cart">
            <div className="quantity">
              {/* <button>-</button> */}
              <input
                type="number"
                min="1"
                max="9"
                step="1"
                value={quantityToBuy}
                onChange={(e) => setQuantityToBuy(Number(e.target.value))}
              />
              {/* <button>+</button> */}
            </div>
            <button className="add-to-cart" onClick={addToCart}>
              <img src={Bag} alt="Shopping Bag" />
            </button>
          </div>
        )}
        {inCart && (
          <div className="in-cart">
            <div className="quantity">Quantity: {item.quantity}</div>
            <button className="remove-from-cart" onClick={removeFromCart}>
              Remove
              <img src={x} alt="Shopping Bag" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
