import { useSelector } from "react-redux";
import Slider from "react-slick";
import { NextBtn, PreviousBtn } from "../productslider/Imagecarousel";

const Banner = () => {
  const banner = ["/banner.png"];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  const banners = useSelector((st) => st.site.data?.homepageBanner);


  return (
    <>
      <div className="w-full  ">
        <div className="container">
          <Slider {...settings}>
            {banners?.map((ele, i) => (
              <div key={i}>
                <img
                  style={{ borderRadius: "10px" }}
                  src={ele}
                  alt={`banner${i + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Banner;
