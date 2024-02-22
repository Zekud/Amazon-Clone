import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import { fakeStore } from "../../Api/endpoints";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/loader/Loader";
import "./productdetail.scss";

function ProductDetail() {
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`${fakeStore}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProductData(data);
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
        <ProductCard data={productData} showDescription={true} />
      )}
    </Layout>
  );
}

export default ProductDetail;
