import purpleSuit from "../assets/Catalog/purple-suit.jpeg";
import mensBrownJacket from "../assets/Catalog/mens-brown-jacket.jpeg";
import mensOrangeJacket from "../assets/Catalog/mens-orange-jacket.jpeg";
import mensWhiteJacket from "../assets/Catalog/mens-white-black-jacket.jpeg";
import womensBlackJacket from "../assets/Catalog/womens-black-jacket.jpeg";
import womensYellowJacket from "../assets/Catalog/womens-yellow-jacket.jpeg";

const catalog = [
  {
    name: "Purple Suit",
    price: 1000.0,
    color: "purple",
    type: "suit",
    img: purpleSuit,
    gender: "men",
  },
  {
    name: "Brown Jacket",
    price: 190.0,
    color: "Brown",
    type: "jacket",
    img: mensBrownJacket,
    gender: "men",
  },
  {
    name: "Orange Jacket",
    price: 180.0,
    color: "orange",
    type: "jacket",
    img: mensOrangeJacket,
    gender: "men",
  },
  {
    name: "White and Black Jacket",
    price: 250.0,
    color: "white",
    type: "jacket",
    img: mensWhiteJacket,
    gender: "men",
  },
  {
    name: "Black Jacket",
    price: 200.0,
    color: "black",
    type: "jacket",
    img: womensBlackJacket,
    gender: "women",
  },
  {
    name: "Yellow Jacket",
    price: 150.0,
    color: "yellow",
    type: "jacket",
    img: womensYellowJacket,
    gender: "women",
  },
];

export default catalog;
