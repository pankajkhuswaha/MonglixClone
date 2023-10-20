import { useLocation, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import numberFormat from "../../essentail/numberFormat";
import parse from "html-react-parser";
import SelectImage from "./SelectImage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart } from "../../features/cartSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  const users = useSelector((state) => state.auth.user);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const site = useSelector((st) => st.site.data);
  const handleCart = ({ id, qty }) => {
    if (!users) {
      navigate("/login");
    } else {
      dispatch(addCart({ id, qty }))
        .then(unwrapResult)
        .then(() => {
          navigate("/checkout");
          dispatch(userCart());
        });
    }
  };
  const SingleProductData = data || localStorage.getItem("SingleProductData");
  const user = useSelector((state) => state.auth?.user?.user);
  const {
    images,
    price,
    platinumdiscount,
    golddiscount,
    silverdiscount,
    retaildiscount,
  } = SingleProductData;
  return (
    <div>
      {SingleProductData ? (
        <Stack display={"flex"} flexWrap={"wrap"} flexDirection={"row"}>
          <Stack flex={5}>
            <SelectImage img={images} data={SingleProductData} />
          </Stack>
          <Stack position={"sticky"} flex={5} p={3}>
            <div className="p-3 border-1 rounded-md">
              <p className="text-xl font-[600] text-gray-500">
                {SingleProductData.name}
              </p>
              {/* price - (price * discountPercentage) / 100 */}
              <p className="text-3xl py-2 font-bold text-[#353543]">
                {!user && numberFormat(price - (price * retaildiscount) / 100)}
                {(user?.role == "user" || user?.role == "admin") &&
                  numberFormat(price - (price * retaildiscount) / 100)}
                {user?.role == "silver" &&
                  numberFormat(price - (price * silverdiscount) / 100)}
                {user?.role == "gold" &&
                  numberFormat(price - (price * golddiscount) / 100)}
                {user?.role == "platinum" &&
                  numberFormat(price - (price * platinumdiscount) / 100)}
              </p>
              <p className="text-lg text-danger font-bold">
                <del>{numberFormat(price)}</del>
                {!user && <sup> {retaildiscount}%</sup>}
                {(user?.role == "user" || user?.role == "admin") && (
                  <sup> {retaildiscount}%</sup>
                )}
                {user?.role == "silver" && <sup> {silverdiscount}%</sup>}
                {user?.role == "gold" && <sup> {golddiscount}%</sup>}
                {user?.role == "platinum" && <sup> {platinumdiscount}%</sup>}
              </p>
            </div>

            <div className="p-3 border-1 rounded-md my-6">
              <p className="text-2xl font-[600] py-2 text-[#353543]">
                Product Details
              </p>
              <p className="text-lg font-[400] text-gray-500">
                {parse(SingleProductData.mindiscription.replace(/<\/?p>/g, ""))}
              </p>
              
            </div>
            <button
              style={{
                backgroundColor: site?.primarybg,
                borderColor: site?.primarybg,
              }}
              onClick={() => handleCart({ id: SingleProductData._id, qty: 1 })}
              className="text-white text-[15px]  flex align-center justify-center gap-2 border-1 p-3 rounded-md border-[#9F2089] w-[200px]"
            >
              <svg
                className="mt-[4px]"
                width="20"
                height="20"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
                ml="4"
                mr="4"
                stroke="#ffffff"


                icon="[object Object]"
                iconsize="20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.927 3.28A.956.956 0 0 0 2.576 4.63l5.437 5.438-5.3 5.3a.956.956 0 1 0 1.352 1.351l5.43-5.43a1.727 1.727 0 0 0-.032-2.474L3.927 3.28Z"
                  fill="#fff"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.631 3.28A.956.956 0 1 0 10.28 4.63l5.437 5.438-5.3 5.3a.956.956 0 1 0 1.352 1.351l5.43-5.43a1.727 1.727 0 0 0-.032-2.474L11.631 3.28Z"
                  fill="#fff"
                ></path>
              </svg>
              <span className="text-[18px]">Buy Now</span>
            </button>
          </Stack>
        </Stack>

        
      ) : (
        <div>Loading...</div>
      )}

    
    </div>

  );
};

export default ProductDetail;
