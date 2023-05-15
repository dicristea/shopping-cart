import React, { useState } from "react";
import "../styles/Card.css";
import Bag from "../assets/shopping-bag-white-add.png";
import fetchItem from "../utils/fetchItem";

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

  const onChangeQuantity = (e) => {
    setQuantityToBuy(Number(e.target.value));
  };

  // useCallback !!!!!!!!!!!!!!
  const parseItemName = () =>
    item.name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="card">
      <div className="image container">
        <img src={item.img} alt={`${item.gender}'s ${item.name}.`} />
      </div>
      <div className="item-info container">
        <div className="item-text">
          <div className="item-name">{parseItemName()}</div>
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
                onChange={onChangeQuantity}
              />
              {/* <button>+</button> */}
            </div>
            <button className="add-to-cart container" onClick={addToCart}>
              <img src={Bag} alt="Shopping Bag" />
            </button>
          </div>
        )}
        {inCart && <div className="quantity">Quantity: {item.quantity}</div>}
      </div>
    </div>
  );
};

export default Card;
