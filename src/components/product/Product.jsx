import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.scss";
function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section className="product-container">
      {product.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </section>
  );
}

export default Product;
