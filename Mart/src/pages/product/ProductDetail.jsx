import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import numberFormat from "../../essentail/numberFormat";
import SelectImage from "./SelectImage";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  const [SingleProductData, setSingleProductData] = useState(
    data || localStorage.getItem("SingleProductData")
  );
  const { images } = SingleProductData;
  console.log(images);
  console.log(SingleProductData);
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
        <Stack display={"flex"} flexDirection={"row"}>
          <Stack flex={5}>
            <SelectImage img={images} />
          </Stack>
          <Stack
            position={"sticky"}
            flex={5}
            p={2}
            sx={{ boxShadow: "0 2px 7px #dfdfdf" }}
          >
            <div className="p-3 border-1 rounded-md">
              <p className="text-xl font-[600] text-gray-500">
                {SingleProductData.name}
              </p>
              <p className="text-3xl py-2">
                {numberFormat(SingleProductData.price)}
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
