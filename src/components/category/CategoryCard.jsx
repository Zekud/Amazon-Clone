import React from "react";
import "./category.scss";
import { Link } from "react-router-dom";
function CategoryCard(props) {
  const { data } = props;

  return (
    <div className="category-card">
      <Link to={`/category/${data.title}`}>
        <h2>{data.title}</h2>
        <img src={data.img} alt="" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CategoryCard;
