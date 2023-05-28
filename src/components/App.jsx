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
  const [currentPage, setCurrentPage] = useState("Home");
  const [itemQuantity, setItemQuantity] = useState(0);

  const navigateToHome = () => {
    setCurrentPage("Home");
  };

  const navigateToAbout = () => {
    setCurrentPage("About");
  };

  const navigateToCatalog = () => {
    setCurrentPage("Catalog");
  };

  const navigateToCart = () => {
    setCurrentPage("ShoppingCart");
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
        {currentPage === "Home" && (
          <Home navigateToCatalog={navigateToCatalog} />
        )}
        {currentPage === "About" && <About />}
        {currentPage === "Catalog" && (
          <Catalog updateItemQuantity={updateItemQuantity} />
        )}
        {currentPage === "ShoppingCart" && (
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
