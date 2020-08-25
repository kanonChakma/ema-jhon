import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
   const data=fakeData.slice(0,10);
   const [product,setProduct]=useState(data);
   const [cart,setCart]=useState([]);

   const handleEvent=(pro)=>{
       let newCart=[...cart,pro];
       setCart(newCart);
   }
    return (
        <div className="shop-container">
            <div className="product-container">
                {product.map(pd=><Product product={pd} handleEvent={handleEvent}></Product>)}
            </div>
            <div className="cart-container">
             {
                 <Cart cart={cart}></Cart>
             }
            </div>
        </div>
    );
};
export default Shop;