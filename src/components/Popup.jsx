import React from "react";
import "../styles/Card.css";

const Popup = ({ open, navigateToCart }) => {
  if (open) {
    return (
      <div className="reset-popup overlay">
        <div className="reset-message">
          Shopping Cart Popup
          <button className="purchase" onClick={() => navigateToCart()}>
            Purchase
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Popup;
