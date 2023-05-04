export default function fetchCart(localStorageKey) {
  let localCart;

  if (window.localStorage.getItem(localStorageKey) !== null) {
    localCart = JSON.parse(window.localStorage.getItem(localStorageKey));
  } else localCart = 0;

  return localCart;
}
