
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

  
  const isUser = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const site = useSelector((st) => st.site.data);

  const handleCart = ({ id, qty }) => {
    if (isUser !==undefined) {
  navigate("/login");
   
    } else {
             dispatch(addCart({ id, qty }));
             navigate("/checkout");
             dispatch(userCart());
    }
  };

  return (
    <div className="flex justify-center w-[180px]">
      {load ? (
        <Loader />
      ) : (
        <div className="mycard min-w-[170px] max-w-[200px] md:min-w-[148px]   hover:shadow-xl rounded-b-lg border border-[#e5e7eb] mx-2 my-4">
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
