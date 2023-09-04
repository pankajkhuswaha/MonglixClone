import React from "react";
import Slider from "react-slick";
import "./Imagecarousel.css";
import "slick-carousel/slick/slick.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick-theme.css";
import Mycard from "./card/Mycard";

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon
        sx={{ color: "black", position: "relative", left: "4px" }}
      />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon sx={{ color: "black" }} />
    </div>
  );
};

export default function Imagecarousel({ products, load }) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
      {products.map((ele, i) => {
        return <Mycard key={i} data={ele} load={load} />;
      })}
    </Slider>
    </div>
  );
}
