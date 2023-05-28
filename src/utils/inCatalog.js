import CATALOG from "./Catalog";

export default function inCatalog(item) {
  const catalogItemNames = Object.keys(CATALOG);

  if (catalogItemNames.includes(item)) {
    return item;
  }
}
