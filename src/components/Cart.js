import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart_header"> Cart is empty </div>
        ) : (
          <div className="cart cart_header">
            {" "}
            You have {cartItems.length} items in the cart{" "}
          </div>
        )}

        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div> {item.title}</div>
                    <div className="right">{item.price} x item.count </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart">
            <div className="total"></div>
          </div>
        </div>
      </div>
    );
  }
}
