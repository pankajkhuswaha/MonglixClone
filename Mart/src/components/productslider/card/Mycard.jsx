import React from "react";
import numberFormat from "../../../essentail/numberFormat";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Buttonele from "../../button/Buttonele";
import Loader from "../loader/Loader";

import "./Mycard.css";
import { IconButton, Stack } from "@mui/material";

const Mycard = ({ data, load }) => {
  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <Link to={`products/${data._id}`} state={data}>
          <div className="mycard  md:m-[3px] m-[0px]">
            <div className="p-3">
              <div className="imgcontainer">
                <img src={data.images[0]} alt="" width={140} height={140} />
              </div>
              <p className="text-sm ">{data.name.slice(0, 29)}</p>
              <p className="font-bold text-md">{numberFormat(data.price)}</p>
              <Stack
                pt={1}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Buttonele title={"Buy Now"} />
                <IconButton
                  sx={{ color: "#FF4268" }}
                  aria-label="add to shopping cart"
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Stack>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Mycard;
