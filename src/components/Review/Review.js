import React, { useEffect, useState } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
const Review = () => {
  const [cart, setCart] = useState([]);

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
    <div>
      <h1>whats{cart.length}up buddy</h1>
    </div>
  );
};
export default Review;
