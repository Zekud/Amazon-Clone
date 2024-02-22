import React, { useEffect } from "react";
import { data } from "./categorydata";
import "./category.scss";
import CategoryCard from "./CategoryCard";
function Categroy() {
  return (
    <section className="category">
      {data?.map((item, index) => {
        return <CategoryCard data={item} key={index} />;
      })}
    </section>
  );
}

export default Categroy;
