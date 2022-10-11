import React, { Component } from "react";
import Modal from "react-modal";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };

    console.log(props);
  }

  openModal = (product) => {
    this.setState({ product });
  };

  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
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

                  <a href={"#" + product.id}>
                    <p onClick={() => this.openModal(product)}>
                      {product.title}
                    </p>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {
          // this is a condition if product exists
          product && (
            <Modal isOpen={true} onRequestClose={this.closeModal}>
              <div>
                <button className="close-modal" onClick={this.closeModal}>
                  {" "}
                  x{" "}
                </button>
                <div className="modal-info">
                  <img src={product.image} alt={product.title}></img>
                  <div>{product.description}</div>
                </div>
              </div>
            </Modal>
          )
        }
      </div>
    );
  }
}
