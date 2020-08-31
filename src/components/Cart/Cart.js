import React from "react";
import "./Cart.css";
const Cart = (props) => {
  console.log(props.cart);
  const cart = props.cart;
  const price = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  let ship = 0;
  if (price > 40) {
    ship = 0;
  } else if (price > 0 && price < 40) {
    ship = 12.0;
  }
  const tax = price / 10;
  const total = price + ship + tax;
  const btax = price + ship;
  const precision = (num) => {
    const newNum = num.toFixed(2);
    return Number(newNum);
  };
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>item ordered:{cart.length}</p>
      <table>
        <tbody>
          <tr>
            <td>price:</td>
            <td>${precision(price)}</td>
          </tr>
          <tr>
            <td> tax:</td>
            <td>${precision(tax)}</td>
          </tr>
          <tr>
            <td>before tax:</td>
            <td>${precision(btax)}</td>
          </tr>
          <tr className="total">
            <td>ordered total:</td>
            <td>${precision(total)}</td>
          </tr>
        </tbody>
      </table>
      {props.children}
    </div>
  );
};
export default Cart;
