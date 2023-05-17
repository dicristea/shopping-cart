import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home";
import Catalog from "./Catalog";
import About from "./About";
// import Popup from "./Popup";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [isHome, setIsHome] = useState(true);
  const [viewAbout, setViewAbout] = useState(false);
  const [viewCatalog, setViewCatalog] = useState(false);
  const [viewShoppingCart, setViewShoppingCart] = useState(false);

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

  return (
    <div className="App">
      <Header
        navigateToHome={navigateToHome}
        navigateToAbout={navigateToAbout}
        navigateToCatalog={navigateToCatalog}
        navigateToCart={navigateToCart}
      />
      <main className="main">
        {isHome && <Home navigateToCatalog={navigateToCatalog} />}
        {viewAbout && <About />}
        {viewCatalog && <Catalog />}
        {viewShoppingCart && <ShoppingCart />}
      </main>
      <Footer />
    </div>
  );
}

export default App;