import React from "react";
import "./multicarousel.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Heading from "../Heading";
import ProductCard from "../ProductCard";

import { useHistory } from "react-router-dom";

// remove after api iontegration

import { productData } from "./util";

const Multicarousel = () => {
  const history = useHistory();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1440 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1439, min: 1025 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 465 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const onCardClick = (item) => {
    history.push({
      pathname: "/single-product",
      state: {
        item,
      },
    });
  };

  return (
    <div className="multiCarousel_container">
      <div className="row" style={{ marginBottom: "5%" }}>
        <Heading title="New Arrivals" data-aos="fade-up" />
      </div>
      <Carousel
        partialVisible={false}
        focusOnSelect={true}
        containerClass="multiCarousel_container"
        responsive={responsive}
        slidesToSlide={4}
      >
        {productData.map((data) => {
          return (
            <ProductCard
              onCardClick={onCardClick}
              cardImage={data?.imagePath}
              cardTitle={data?.title}
              cardDesc={data?.desc}
              variants={data?.variants}
              price={data?.price}
              offerPrice={data?.offerPrice}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Multicarousel;
