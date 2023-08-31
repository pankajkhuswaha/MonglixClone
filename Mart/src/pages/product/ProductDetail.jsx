import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import numberFormat from "../../essentail/numberFormat";
import Checkout from "./Checkout";
import SelectImage from "./SelectImage";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  const [SingleProductData, setSingleProductData] = useState(
    data || localStorage.getItem("SingleProductData")
  );
  const { images } = SingleProductData;
  useEffect(() => {
    if (SingleProductData) {
      localStorage.setItem(
        "SingleProductData",
        JSON.stringify(SingleProductData)
      );
    }
  }, [SingleProductData]);

  return (
    <div>
      {SingleProductData ? (
        <Stack display={"flex"} flexWrap={"wrap"} flexDirection={"row"}>
          <Stack flex={5}>
            <SelectImage img={images} />
          </Stack>
          <Stack position={"sticky"} flex={5} p={3}>
            <div className="p-3 border-1 rounded-md">
              <p className="text-xl font-[600] text-gray-500">
                {SingleProductData.name}
              </p>
              <p className="text-3xl py-2 text-[#353543]">
                {numberFormat(SingleProductData.price)}
              </p>
            </div>

            <div className="p-3 border-1 rounded-md my-6">
              <p className="text-2xl font-[600] py-2 text-[#353543]">
                Product Details
              </p>
              <p className="text-lg font-[400] text-gray-500">
                {SingleProductData.mindiscription}
              </p>
            </div>
          </Stack>
        </Stack>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetail;
