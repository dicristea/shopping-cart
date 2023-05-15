export default function fetchItem(localStorageKey) {
  let localCart;

  if (window.localStorage.getItem(localStorageKey) !== null) {
    localCart = JSON.parse(window.localStorage.getItem(localStorageKey));
  } else return null;

  return localCart;
}
