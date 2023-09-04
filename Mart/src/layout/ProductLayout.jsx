import React from "react";
import { Stack } from "@mui/material";
import Buttonele from "../components/button/Buttonele";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";

const ProductLayout = (props) => {
  const site = useSelector((st) => st.site.data);

  return (
    <div className="container">
      <Stack p={4}>
        <Stack
          p={2}
          borderRadius={2}
          sx={{ backgroundColor: site.secondarybg }}
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

          <Buttonele  title={"See All"} />
        </Stack>
        <br />
        {props.children}
      </Stack>
    </div>
  );
};

export default ProductLayout;
