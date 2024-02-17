import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormatter from "../currencyFormater/CurrencyFormatter";
function ProductCard({ data }) {
  const { image, title, rating, price } = data;
  return (
    <div className="product-card">
      <a href="#">
        <img src={image} alt="product" />
      </a>
      <div className="product-info">
        <h2>{title}</h2>
        <div className="rating-container">
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div className="price">
          <CurrencyFormatter amount={price} />
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
