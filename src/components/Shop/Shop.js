import React, { useState, useEffect } from "react";
import "./Shop.css";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
const Shop = () => {
  //    const data=fakeData.slice(0,10);
  const [product, setProduct] = useState(fakeData);
  const [cart, setCart] = useState([]);

   useEffect(()=>{
    const saveData=getDatabaseCart();
    const getKey=Object.keys(saveData);
    const count=getKey.map(key=>{
          const product=fakeData.find(pd=>pd.key===key); 
          product.quantity=saveData[key];
          return product;
    })
   setCart(count);
   },[])
  const handleEvent = (product) => {
    const tobeAdded = product.key;
    const sameproduct = cart.find((pd) => pd.key === tobeAdded);
    let count = 1;
    let newCart;
    if (sameproduct) {
      count = sameproduct.quantity + 1;
      sameproduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== tobeAdded);
      newCart = [...others, sameproduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="main-container">
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
