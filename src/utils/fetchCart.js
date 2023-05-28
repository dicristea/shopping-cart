export default function fetchCart() {
  let localCart;
  localStorage.removeItem("debug");

  if (window.localStorage !== null) {
    localCart = { ...localStorage };
  } else return null;

  return localCart;
}
