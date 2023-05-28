import React from "react";
import fetchCart from "../utils/fetchCart";

const CartNumber = () => {
  const localStorageCart = fetchCart();

  let quantity = Object.values(localStorageCart).reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );
  return <>{quantity}</>;
};

export default CartNumber;
