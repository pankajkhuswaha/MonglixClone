import { useSelector } from "react-redux";
import Slider from "react-slick";
import { NextBtn, PreviousBtn } from "../productslider/Imagecarousel";

const Banner = () => {
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
          <div className="flex  gap-2">
            <div className="flex-[6]">
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
            <div className="flex-[4]">
              <div className="flex flex-col">
                <img
                  src="https://beta.apinouthemes.com/uploads/promotion_1_d6deb591f0.jpeg"
                  alt=""
                
                />
                <img
                  src="https://beta.apinouthemes.com/uploads/promotion_2_d252453586.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
