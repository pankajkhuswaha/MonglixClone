import React from "react";
import numberFormat from "../../../essentail/numberFormat";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Buttonele from "../../button/Buttonele";
import Loader from "../loader/Loader";
import { addCart, userCart } from "../../../features/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import "./Mycard.css";
import { IconButton, Stack } from "@mui/material";

const Mycard = ({ data, load }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCart = ({ id, qty }) => {
    dispatch(addCart({ id, qty }));
    navigate("/checkout");
    dispatch(userCart());
  };
  const site = useSelector((st) => st.site.data);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="mycard hover:shadow-xl rounded-b-lg border border-[#e5e7eb] mx-2 my-4">
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
    </>
  );
};

export default Mycard;
