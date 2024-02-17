import React from "react";
import Layout from "../../components/layout/Layout";
import CarouselSlider from "../../components/carousel/Carousel";
import Categroy from "../../components/category/Categroy";
import Product from "../../components/product/Product";
function Landing() {
  return (
    <Layout>
      <CarouselSlider />
      <Categroy />
      <Product />
    </Layout>
  );
}

export default Landing;
