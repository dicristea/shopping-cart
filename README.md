## Project: Shopping Cart

A shopping cart experience created using ReactJS! Here, I explore the usage and implementation of lifecycle methods using hooks and state. The project is inspired by The Odin Project curriculum.

<a href="https://dicristea.github.io/shopping-cart/">🔗Live Preview</a>

## Features

- Home, About, Catalong, and Shopping Cart pages with easy UI navigation
- Sticky Navgation Bar shopping bag icon displays quantity of items currently in the cart
- Custom input for quanitity increment and decrement, readonly
- Maximum 5 of one item can be in the cart.
- On submitting an order or editting the cart, the amount in the cart and order summary adjusts, as well at the total price
- Can remove items quickly from the cart via 'x'

## Todos

- Hover labels on all Icon Buttons
- Use react routing rather to update URL on navigation to different pages.
- Use useContext rather than prop drilling
- "Proceed to Checkout" is currently inactive.

## What I learned

- Using "body::before" alongside a sticky nav bar for full page background image
  Check: <a href="https://forum.freecodecamp.org/t/why-does-body-before-code-work-and-not-body/350130">Freecodecamp Article</a>
- Using an object as a data structure for easy configuration of catalog and shopping cart information.
- Using Object.keys(), Object.values() to return array of just those values.
- working with state and understanding when to use useEffect to update only parts of a page
- Practiced Git workflow: Git branching, github pull requests, editting commits
- Practiced using array methods, spread syntax, inline styling, media queries

## Sources

- Title Background Photo by <a href="https://unsplash.com/@eexit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joris Berthelot</a> on <a href="https://unsplash.com/photos/EnTU_hr9wPA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- <a href="https://www.flaticon.com/free-icons/shopping-bag" title="shopping bag icons">Shopping bag icons created by Freepik - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/close" title="close icons">Remove "X" icon created by Fuzzee - Flaticon</a>
- Most Catalog Photos by <a href="https://unsplash.com/@karsten116?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karsten Winegeart</a> on <a href="https://unsplash.com/photos/Wc0xH0tFkpI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Catalog: Blue White Suit Photo by <a href="https://unsplash.com/@phodskins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Patrick Hodskins</a> on <a href="https://unsplash.com/photos/YKikzmEOJXM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Catalog: Yellow Pants Photo by <a href="https://unsplash.com/@rodograph?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victor Rodvang</a> on <a href="https://unsplash.com/photos/kIavtjR0sZY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- About Hero Photo by <a href="https://unsplash.com/@moorecreative?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Harrison Moore</a> on <a href="https://unsplash.com/photos/pNuBdhn8vKU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
- Site inspired by <a href="https://www.moncler.com/en-us/">Moncler</a>

## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
Used gh-pages to host page on github -> https://github.com/gitname/react-gh-pages -> run npm run deploy
