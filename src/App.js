import React from "react";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      cartItems: [],
      // sort:"",
    };
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ cartItems: cartItems.filter((x) => x.id !== product.id) });
  };

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      <div className="grid-container">
        <header>
          <a href="/"> Lemonade Web Shop</a>
          {/* <Counter /> */}
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products
                products={this.state.products}
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
              ></Products>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems} />
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
}

export default App;
