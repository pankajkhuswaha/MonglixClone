import React, { useRef } from "react";
import Mycard from "./card/Mycard";
import "./Imagecarousel.css";

const Imagecarousel = ({ products, load }) => {
  const containerRef = useRef(null);
  const cardWidth = 300;

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
        <Mycard data={products} load={load} />
      </div>
    </div>
  );
};

export default Imagecarousel;
