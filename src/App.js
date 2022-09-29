import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    <div className="grid-container">
      <header>
        <a href="/"> Lemonade Web Shop</a>
        <Counter />
      </header>
      <main>Product list</main>
      <footer>All right is reserved.</footer>
    </div>
    //  <p></p>
    //     <span></span>
    //   </header>
    // </div>
  );
}

export default App;
