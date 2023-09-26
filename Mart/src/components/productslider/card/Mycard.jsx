/* eslint-disable react/prop-types */

import numberFormat from "../../../essentail/numberFormat";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Buttonele from "../../button/Buttonele";
import Loader from "../loader/Loader";
import { addCart, userCart } from "../../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import "./Mycard.css";
import { IconButton, Stack } from "@mui/material";
import { unwrapResult } from "@reduxjs/toolkit";

const Mycard = ({ data, load }) => {
  const pathname = useLocation().pathname;

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
          ? "flex justify-center w-[180px] md:w-[220px]"
          : "flex justify-center"
      }
    >
      {load ? (
        <Loader />
      ) : (
        <div
          className={
            pathname.includes("product")
              ? "mycard max-sm:w-[180px]  hover:shadow-xl rounded-b-lg border border-[#e5e7eb] mx-2 my-4"
              : "mycard w-[210px] hover:shadow-xl rounded-b-lg border border-[#e5e7eb] mx-2 my-4"
          }
        >
          <div className="p-3">
            <Link to={`/products/${data._id}`} state={data}>
              <div className="imgcontainer">
                <img src={data.images[0]} alt="" width={140} height={140} />
              </div>
              <p className="text-md font-bold  text-gray-600 ">
                {`${data.name.slice(0, 18)}..`}
              </p>
              <p className="font-bold text-md">{numberFormat(data.price)}</p>
            </Link>

            <Stack
              pt={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Buttonele title={"Buy Now"} />
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
