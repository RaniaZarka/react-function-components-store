import React from "react";

function Cart(props) {
  const { cartItems } = props;
  console.log(cartItems);

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
                  <div className="left">
                    {item.count} x {item.price} {" kr "}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart">
          <div className="total">
            <div>
              Total: {cartItems.reduce((a, c) => a + c.price * c.count, 0)} kr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
