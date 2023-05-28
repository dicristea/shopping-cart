import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home";
import Catalog from "./Catalog";
import About from "./About";
import ShoppingCart from "./ShoppingCart";
import fetchCart from "../utils/fetchCart";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [viewAbout, setViewAbout] = useState(false);
  const [viewCatalog, setViewCatalog] = useState(false);
  const [viewShoppingCart, setViewShoppingCart] = useState(false);
  const [itemQuantity, setItemQuantity] = useState(0);

  // Try not to hardcode all of the true/false for all the views.
  const navigateToHome = () => {
    setViewAbout(false);
    setViewCatalog(false);
    setViewShoppingCart(false);
    setIsHome(true);
  };

  const navigateToAbout = () => {
    setIsHome(false);
    setViewShoppingCart(false);
    setViewCatalog(false);
    setViewAbout(true);
  };

  const navigateToCatalog = () => {
    setIsHome(false);
    setViewAbout(false);
    setViewShoppingCart(false);
    setViewCatalog(true);
  };

  const navigateToCart = () => {
    setViewCatalog(false);
    setViewAbout(false);
    setIsHome(false);
    setViewShoppingCart(true);
  };

  const updateItemQuantity = () => {
    const localStorageCart = fetchCart();

    let quantity = Object.values(localStorageCart).reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );
    setItemQuantity(quantity);
  };

  useEffect(() => {
    updateItemQuantity();
  }, [itemQuantity]);

  return (
    <div className="App">
      <Header
        navigateToHome={navigateToHome}
        navigateToAbout={navigateToAbout}
        navigateToCatalog={navigateToCatalog}
        navigateToCart={navigateToCart}
        itemQuantity={itemQuantity}
      />
      <main className="main">
        {isHome && <Home navigateToCatalog={navigateToCatalog} />}
        {viewAbout && <About />}
        {viewCatalog && <Catalog updateItemQuantity={updateItemQuantity} />}
        {viewShoppingCart && (
          <ShoppingCart
            itemQuantity={itemQuantity}
            updateItemQuantity={updateItemQuantity}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
