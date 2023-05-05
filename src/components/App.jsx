import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home";
import Catalog from "./Catalog";
import Popup from "./Popup";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [viewCatalog, setViewCatalog] = useState(false);
  const [viewShoppingCart, setViewShoppingCart] = useState(false);
  const [viewPopup, setViewPopup] = useState(false);

  const navigateToCatalog = () => {
    setIsHome(false);
    setViewPopup(false);
    setViewCatalog(true);
  };

  const navigateToCart = () => {
    setViewCatalog(false);
    setViewPopup(false);
    setViewShoppingCart(true);
  };

  const popup = () => {
    setViewPopup(true);
  };

  return (
    <div className="App">
      <Header
        navigateToCatalog={navigateToCatalog}
        navigateToCart={navigateToCart}
      />
      <div className="main">
        {isHome && <Home navigateToCatalog={navigateToCatalog} />}
        {viewCatalog && <Catalog />}
        {viewShoppingCart && <ShoppingCart />}
        {viewPopup && <Popup navigateToCart={navigateToCart} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
