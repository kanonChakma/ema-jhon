import React, { useEffect, useState } from "react";
import image from "../../images/giphy.gif";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(false);
  const handleButton = () => {
    setCart([]);
    setOrder(true);
    processOrder();
  };
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
  let showImage;
  if (order) {
    showImage = <img src={image} alt="" />;
  }
  return (
    <div className="main-container">
      <div className="product-container">
        <h1 className="review-h1">Your {cart.length} items list</h1>
        {cart.map((pd) => (
          <ReviewItem
            key={pd.key}
            product={pd}
            removeProduct={removeProduct}
          ></ReviewItem>
        ))}
        {showImage}
      </div>
      <div className="cart-conatiner">
        <Cart cart={cart}>
          <button onClick={handleButton} className="cart-btn">
            place order
          </button>
        </Cart>
      </div>
    </div>
  );
};
export default Review;
