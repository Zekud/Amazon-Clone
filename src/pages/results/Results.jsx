import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { fakeStore } from "../../Api/endpoints";
import ProductCard from "../../components/product/ProductCard";
import "../../components/product/product.scss";
import Loader from "../../components/loader/Loader";
function Results() {
  const { category } = useParams();
  const [results, setResults] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${fakeStore}/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setResults(data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);
  return (
    <Layout>
      {Loading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <h3 style={{ padding: "30px" }}>Category/{category}</h3>
          <hr />
          <div className="product-container">
            {results?.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
