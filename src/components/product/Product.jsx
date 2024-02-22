import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "../loader/Loader";
import "./product.scss";
function Product() {
  const [product, setProduct] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);
  return Loading ? (
    <Loader />
  ) : (
    <section className="product-container">
      {product?.map((item, index) => (
        <ProductCard data={item} key={index} />
      ))}
    </section>
  );
}

export default Product;
