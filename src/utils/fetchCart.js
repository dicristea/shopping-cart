export default function fetchCart() {
  let localCart;

  if (window.localStorage !== null) {
    localCart = { ...localStorage };
  } else return null;

  return localCart;
}
