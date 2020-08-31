import React from "react";
import "./ReviewItem.css";
const ReviewItem = (props) => {
  console.log(props.product);
  const { img, name, quantity, price } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4 className="product-name">{name}</h4>
        <h4>${price}</h4>
        <h4>{quantity.length}</h4>
        <button className="product-btn">Remove</button>
      </div>
    </div>
  );
};
export default ReviewItem;
