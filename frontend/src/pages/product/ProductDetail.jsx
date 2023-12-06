/* eslint-disable react/no-unknown-property */
import { useLocation, useNavigate } from "react-router-dom";
import numberFormat from "../../essentail/numberFormat";
import parse from "html-react-parser";
import SelectImage from "./SelectImage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart, userCart } from "../../features/cartSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  const users = useSelector((state) => state.auth.user?.user);

  const navigate = useNavigate();
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

  const [VarientData, setVarientData] = useState();

  const user = useSelector((state) => state.auth?.user?.user);
  const {
    platinumdiscount,
    subItems,
    golddiscount,
    silverdiscount,
    retaildiscount,
    datasheet,
  } = SingleProductData;

  const Data = VarientData || SingleProductData;

  return (
    <div>
      {Data ? (
        <div className="flex flex-wrap gap-2 flex-row">
          <div className="flex-[3] border-1 rounded-md bg-white">
            <SelectImage img={Data.images} data={Data} />
          </div>
          <div className="flex-[5] border-1 bg-white rounded-md p-3">
            <div className="p-3 ">
              <p className="lghead py-2">{Data.name}</p>

              <p className="text-2xl py-2 font-semibold text-[#54546b]">
                {!user &&
                  numberFormat(
                    Data.price - (Data.price * retaildiscount) / 100
                  )}
                {(user?.role == "user" || user?.role == "admin") &&
                  numberFormat(
                    Data.price - (Data.price * retaildiscount) / 100
                  )}
                {user?.role == "silver" &&
                  numberFormat(
                    Data.price - (Data.price * silverdiscount) / 100
                  )}
                {user?.role == "gold" &&
                  numberFormat(Data.price - (Data.price * golddiscount) / 100)}
                {user?.role == "platinum" &&
                  numberFormat(
                    Data.price - (Data.price * platinumdiscount) / 100
                  )}
              </p>
              <p className="para text-gray-500">
                MRP <del> {numberFormat(Data.price)}</del>
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
              <p className="smhead">Product Details</p>
              <p className="para ">
                {Data &&
                  Data.mindiscription &&
                  parse(Data.mindiscription.replace(/<\/?p>/g, ""))}
              </p>
              {datasheet && (
                <a
                  href={datasheet}
                  target="blank"
                  className="text-danger font-semibold text-lg mt-2 "
                >
                  View Detail Description
                </a>
              )}
            </div>
            {Data?.subItems && (
              <div className="p-3 rounded-md">
                <p className="smhead"> Select Varients</p>

                {subItems?.map((ele, id) => {
                  return (
                    <div key={id}>
                      <p
                        className={`cursor-pointer p-2 w-fit my-1 rounded-lg ${
                          ele === VarientData
                            ? "border-1 border-blue-500 text-blue-500"
                            : "border-1"
                        }`}
                        onClick={() => setVarientData(ele)}
                      >
                        {ele.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            <button
              style={{
                backgroundColor: site?.primarybg,
                borderColor: site?.primarybg,
              }}
              onClick={() => handleCart({ id: Data._id, qty: 1 })}
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
                iconSize="20"
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
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetail;
