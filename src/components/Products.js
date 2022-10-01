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
                  <div className="price"> {product.price} kr</div>
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
                <div>
                  <img src={product.image} alt={product.title}></img>
                  <p className="product-description">{product.description}</p>
                  <a href={"#" + product.id}>
                    <p>{product.title}</p>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
