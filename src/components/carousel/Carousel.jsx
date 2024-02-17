import React from "react";
import { img } from "./img/data";
import "./carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CarouselSlider() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {img.map((item, index) => (
          <img src={item} key={index} alt="" />
        ))}
      </Carousel>
      <div className="hero-img"></div>
    </div>
  );
}

export default CarouselSlider;
