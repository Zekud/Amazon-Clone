import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormatter from "../currencyFormater/CurrencyFormatter";
import { Link } from "react-router-dom";
import { cartContext } from "../ContextAPI/CartContext";
function ProductCard({ data, showDescription }) {
  const { id, image, title, rating, price, description } = data;
  const { dispatch } = useContext(cartContext);
  function addCart() {
    dispatch({
      type: "Add_To_Cart",
      item: { id, image, title, rating, price, description },
    });
  }
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt="product" />
      </Link>
      <div className="product-info">
        <h2>{title}</h2>
        {showDescription && <p>{description}</p>}
        <div className="rating-container">
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div className="price">
          <CurrencyFormatter amount={price} />
        </div>
        <button className={showDescription ? "style" : ""} onClick={addCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
