// import React, { useRef } from "react";
// import Mycard from "./card/Mycard";
// import "./Imagecarousel.css";

// const Imagecarousel = ({ products, load }) => {
//   const containerRef = useRef(null);
//   const cardWidth = 500;

//   const btnpressprev = () => {
//     const container = containerRef.current;
//     container.scrollLeft -= cardWidth;
//   };

//   const btnpressnext = () => {
//     const container = containerRef.current;
//     container.scrollLeft += cardWidth;
//   };

//   return (
//     <div className="product-carousel">
//       <button className="pre-btn" onClick={btnpressprev}>
//         <p>&lt;</p>
//       </button>
//       <button className="next-btn" onClick={btnpressnext}>
//         <p>&gt;</p>
//       </button>

//       <div className="product-container md:gap-[20px] gap-0" ref={containerRef}>
//         <Mycard data={products} load={load} />
//       </div>
//     </div>
//   );
// };

// export default Imagecarousel;

import React from "react";
import Slider from "react-slick";
import "./Imagecarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mycard from "./card/Mycard";

export default function Imagecarousel({ products, load }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,

    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {products.map((ele, i) => {
        return <Mycard key={i} data={ele} load={load} />;
      })}
    </Slider>
  );
}
