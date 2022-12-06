import React from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
import Clock from "./components/clock";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const cartItem = cartItems.slice();
    let alreadyInCart = false;
    cartItem.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setCartItems((cartItems) => [...cartItems]);
  };

  const removeFromCart = (product) => {
    const cartItem = cartItems.slice();
    setCartItems(() => [...cartItem.filter((x) => x.id !== product.id)]);
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/"> Lemonade Web Shop</a>
        <Clock />
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products
              products={products}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            ></Products>
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
