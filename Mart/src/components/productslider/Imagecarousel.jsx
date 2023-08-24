import React, { useRef } from "react";
import Mycard from "./Mycard";
import { Productcard } from "../Index";
import "./Imagecarousel.css";
import Loader from "./loader/Loader";

const Imagecarousel = () => {
  const containerRef = useRef(null);
  const cardWidth = 300; // Adjust this to the actual width of your cards

  const btnpressprev = () => {
    const container = containerRef.current;
    container.scrollLeft -= cardWidth;
  };

  const btnpressnext = () => {
    const container = containerRef.current;
    container.scrollLeft += cardWidth;
  };

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="product-container md:gap-[20px] gap-0" ref={containerRef}>
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
        <Mycard />
      </div>
    </div>
  );
};

export default Imagecarousel;
