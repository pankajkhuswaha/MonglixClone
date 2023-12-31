import { useSelector } from "react-redux";
import Slider from "react-slick";
import { NextBtn, PreviousBtn } from "../productslider/Imagecarousel";
import { Link } from "react-router-dom";

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
      <div className="w-full mt-4 flex items-center flex-wrap justify-center gap-4">
        <div className="md:flex-[6] w-full">
          <Slider {...settings}>
            {banners?.map((ele, i) => (
              <Link to={'/product'} key={i}>
                <img className="w-full object-cover"
                  style={{ borderRadius: "10px" }}
                  src={ele}
                  alt={`banner${i + 1}`}
                />
              </Link>
            ))}
          </Slider>
        </div>
        <div className="md:flex-[4] rounded-md">
          <div className="flex gap-1  md:flex-col">
            <Link to={'/product'} className="w-full">

              <img className="w-full rounded-xl object-cover"
                src="/bannner3.png"
                alt=""
              />
            </Link>
            <Link to={'/product'} className="w-full">

              <img className="w-full rounded-xl md:h-full object-cover"
                src="/banner2.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Banner;
