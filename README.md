## Project: Shopping Cart

A shopping cart experience created using ReactJS! Here, I explore the usage and implementation of lifecycle methods using hooks and state. The project is inspired by The Odin Project curriculum.

<a href="https://dicristea.github.io/shopping-cart/">🔗Live Preview</a>

## Features

1. You should have at least two pages (a homepage and a shop page, which includes your shopping cart). Let a user navigate between the pages with a navigation bar, which will be shown on both routes.

2. To your homepage, you can add whatever you’d like! A few images or information will be totally fine; it doesn’t have to be something fancy. The main goal of the project is to focus on setting up the shopping cart. The homepage is there to practice routing using react-router-dom.

3. On your shopping cart route, a user should see a sticky bar (it can be just a top section as well), which displays the number of items currently in the cart. You should also have a button next to it where you can go to the cart to checkout and pay (however we are not going to implement this logic here).

4. Build individual card items for each of your products. Display an input field on it, which lets a user manually type in how many items they want to buy. Also, add an increment and decrement button next to it for fine-tuning. You can also display a title for each product as well as an “Add To Cart” button.

5. Once a user has submitted their order, the amount on the cart itself should adjust.
   Make sure to test your app thoroughly using the React Testing Library. Take care that you don’t directly test react-router-dom, since it is an external library and the developers working on it must have tested the library already.

Lastly, push the project to GitHub! Follow this link for instructions on how to deploy React applications with client-side routing to Github Pages. Be aware that the page will stay blank, unless you import { HashRouter } from react-router-dom and utilize a <HashRouter /> component in place of <BrowserRouter /> as GitHub no longer supports <BrowserRouter />. For a more detailed description, read these parts of the React Router Docs on client-side routing and deploying using gh-pages.

## Todos

- Make UI more responsive for phone screens --> css media queries
- Use useContext rather than prop drilling

## What I learned

- working with state and understanding when I could use hooks (API keys, endpoints, error handling)

## Sources

- Marine Logo:
  Photo found on <a href="https://one-piece-dnd-by-rustage.fandom.com/wiki/Marines">One Piece DND Wiki</a>

- White Shirt:
  Photo by <a href="https://unsplash.com/it/@uyk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Haryo Setyadi</a> on <a href="https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

--

## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
Used gh-pages to host page on github -> https://github.com/gitname/react-gh-pages -> run npm run deploy
