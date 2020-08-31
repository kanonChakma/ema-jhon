import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = (productKey) => {
    const newKey = cart.filter((pd) => pd.key !== productKey);
    setCart(newKey);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productsKey = Object.keys(savedCart);

    const count = productsKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(count);
  }, []);
  return (
    <div className="main-container">
      <div className="product-container">
        <h1 className="review-h1">whats {cart.length} up buddy</h1>
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            product={pd}
            removeProduct={removeProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-conatiner">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
export default Review;
