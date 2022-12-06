import React from "react";

function Products(props) {
  const { products, addToCart, removeFromCart } = props;
  console.log(products);
  return (
    <div>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <div className="product-price">
                <div className="price"> {product.price} kr</div>
                <div>
                  <button
                    onClick={() => addToCart(product)}
                    className="button-primary"
                  >
                    +{" "}
                  </button>
                  <button
                    onClick={() => removeFromCart(product)}
                    className="button-primary"
                  >
                    {" "}
                    -{" "}
                  </button>
                </div>
              </div>
              <div>
                <img src={product.image} alt={product.title}></img>
                <p>{product.title} </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;
