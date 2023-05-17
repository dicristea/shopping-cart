import purpleSuit from "../assets/Catalog/purple-suit.jpeg";
import mensBrownJacket from "../assets/Catalog/mens-brown-jacket.jpeg";
import mensOrangeJacket from "../assets/Catalog/mens-orange-jacket.jpeg";
import mensWhiteJacket from "../assets/Catalog/mens-white-black-jacket.jpeg";
import womensBlackJacket from "../assets/Catalog/womens-black-jacket.jpeg";
import womensYellowJacket from "../assets/Catalog/womens-yellow-jacket.jpeg";
import mensYellowPants from "../assets/Catalog/mens-yellow-pants.jpeg";
import blueWhiteSuit from "../assets/Catalog/unisex-blue-white-suit.jpeg";

const CATALOG = {
  purple_suit: {
    name: "purple_suit",
    price: "1000.00",
    color: "purple",
    type: "suit",
    img: purpleSuit,
    gender: "men",
  },
  brown_jacket: {
    name: "brown_jacket",
    price: "190.00",
    color: "Brown",
    type: "jacket",
    img: mensBrownJacket,
    gender: "men",
  },
  orange_jacket: {
    name: "orange_jacket",
    price: "180.00",
    color: "orange",
    type: "jacket",
    img: mensOrangeJacket,
    gender: "men",
  },
  speckled_jacket: {
    name: "speckled_jacket",
    price: "250.00",
    color: "white",
    type: "jacket",
    img: mensWhiteJacket,
    gender: "men",
  },
  black_jacket: {
    name: "black_jacket",
    price: "200.00",
    color: "black",
    type: "jacket",
    img: womensBlackJacket,
    gender: "women",
  },
  yellow_jacket: {
    name: "yellow_jacket",
    price: "150.00",
    color: "yellow",
    type: "jacket",
    img: womensYellowJacket,
    gender: "women",
  },
  yellow_pants: {
    name: "yellow_pants",
    price: "175.00",
    color: "yellow",
    type: "pants",
    img: mensYellowPants,
    gender: "men",
  },
  american_suit: {
    name: "american_suit",
    price: "1500.00",
    color: "blue",
    type: "suit",
    img: blueWhiteSuit,
    gender: "unisex",
  },
};

export default CATALOG;
