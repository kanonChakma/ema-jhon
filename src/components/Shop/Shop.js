import React, { useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";
const Shop = () => {
  //    const data=fakeData.slice(0,10);
  const [product, setProduct] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleEvent = (pro) => {
    let newCart = [...cart, pro];
    setCart(newCart);
    const count = newCart.filter((pd) => pd.key === pro.key);
    addToDatabaseCart(pro.key, count);
  };
  return(
    <div className="shop-container">
      <div className="product-container">
        {product.map((pd) => (
          <Product
            product={pd}
            handleEvent={handleEvent}
            addtoCart={true}
          ></Product>
        ))}
      </div>
    <div className="cart-container">{<Cart cart={cart}></Cart>}</div>
    </div>
  );
};
export default Shop;
