import React from "react";
import { Stack } from "@mui/material";
import Buttonele from "../components/button/Buttonele";
import Skeleton from "@mui/material/Skeleton";

const ProductLayout = (props) => {
  return (
    <>
      <Stack p={4}>
        <Stack
          p={2}
          borderRadius={2}
          sx={{ backgroundColor: "#F3F4F6" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          {props.load ? (
            <Skeleton width="20%" />
          ) : (
            <h1 className="text-[24px] text-gray-700 font-bold">
              {props.title}
            </h1>
          )}

          <Buttonele title={"See All"} />
        </Stack>
        <br />
        {props.children}
      </Stack>
    </>
  );
};

export default ProductLayout;
