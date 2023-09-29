/* eslint-disable react/prop-types */

import numberFormat from "../../../essentail/numberFormat";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import Loader from "../loader/Loader";
import { addCart, userCart } from "../../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Mycard.css";
import { IconButton, Stack } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";


const Mycard = ({ data, load }) => {
   const {
     images,
     price,
     platinumdiscount,
     golddiscount,
     silverdiscount,
     retaildiscount,
   } = data;
  const pathname = useLocation().pathname;
  const user = useSelector((state) => state.auth?.user?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth?.user?.user);
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

  return (
    <div
      className={
        pathname.includes("product")
          ? "flex justify-center w-[180px]"
          : "flex justify-center"
      }
    >
      {load ? (
        <Loader />
      ) : (
        <div
          className={
            pathname.includes("product")
              ? "mycard max-sm:w-[180px]  hover:shadow-xl rounded-b-lg border mx-1 border-[#e5e7eb]  my-4"
              : "mycard w-[210px] hover:shadow-xl shadow-md rounded-b-lg mr-2 my-4"
          }
        >
          <div className="p-3">
            <Link to={`/products/${data._id}`} state={data}>
              <div className="imgcontainer">
                <img src={data.images[0]} alt="" width={140} height={140} />
              </div>
              <p className="text-md  h-12 overflow-y-hidden text-gray-600 ">
                {data.name}
              </p>
            </Link>

            <Stack
              pt={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <div className='flex flex-col'>
                <p className="font-bold text-md">
                  {!user &&
                    numberFormat(price - (price * retaildiscount) / 100)}
                  {(user?.role == "user" || user?.role == "admin") &&
                    numberFormat(price - (price * retaildiscount) / 100)}
                  {user?.role == "silver" &&
                    numberFormat(price - (price * silverdiscount) / 100)}
                  {user?.role == "gold" &&
                    numberFormat(price - (price * golddiscount) / 100)}
                  {user?.role == "platinum" &&
                    numberFormat(price - (price * platinumdiscount) / 100)}
                </p>
                <p className="text-sm text-gray-700 font-bold">
                  <del>{numberFormat(data.price)}</del>
                  {!user && (
                    <span className="text-green-700 text-sm font-semibold">
                      {" "}
                      {retaildiscount}% Off
                    </span>
                  )}
                  {(user?.role == "user" || user?.role == "admin") && (
                    <span className="text-green-700 text-sm">
                      {" "}
                      {retaildiscount}% Off
                    </span>
                  )}
                  {user?.role == "silver" && (
                    <span className="text-green-700 text-sm">
                      {" "}
                      {silverdiscount}% Off
                    </span>
                  )}
                  {user?.role == "gold" && (
                    <span className="text-green-700 text-sm">
                      {" "}
                      {golddiscount}% Off
                    </span>
                  )}
                  {user?.role == "platinum" && (
                    <span className="text-red-700 text-sm">
                      {" "}
                      {platinumdiscount}% Off
                    </span>
                  )}
                </p>
              </div>
              <IconButton
                onClick={() => handleCart({ id: data._id, qty: 1 })}
                sx={{ color: site.primarybg }}
                aria-label="add to shopping cart"
              >
                <ShoppingCartIcon />
              </IconButton>
            </Stack>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mycard;
