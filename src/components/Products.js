import React, { Component } from "react";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };

    console.log(props);
  }
  render() {
    return (
      <div>
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <div className="product-price">
                  <div className="price"> {product.price}</div>
                  <div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button-primary"
                    >
                      +{" "}
                    </button>
                    <button
                      onClick={() => this.props.removeFromCart(product)}
                      className="button-primary"
                    >
                      {" "}
                      -{" "}
                    </button>
                  </div>
                </div>
                <a href={"#" + product.id}>
                  <img src={product.image} alt={product.title}></img>
                  <p>{product.title}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
