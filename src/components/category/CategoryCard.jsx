import React from "react";
import "./category.scss";
function CategoryCard(props) {
  const { data } = props;
  return (
    <div className="category-card">
      <a href="#">
        <h2>{data.title}</h2>
        <img src={data.img} alt="" />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
