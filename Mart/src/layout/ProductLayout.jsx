import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Buttonele from "../components/button/Buttonele";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";

const ProductLayout = (props) => {
  const site = useSelector((st) => st.site.data);

  return (
    <div className="container">
      <Stack p={{ xs: 2, md: 4 }}>
        <Stack
          p={{ xs: 1, md: 4 }}
          borderRadius={2}
          alignItems={"center"}
          sx={{ backgroundColor: site.secondarybg }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          {props.load ? (
            <Skeleton width="20%" />
          ) : (
            <h1 className="md:text-[24px] text-[18px] text-gray-700 font-bold">
              {props.title}
            </h1>
          )}
          <Link to={"/product"}>
            <Buttonele title={"See All"} />
          </Link>
        </Stack>
        <br />
        {props.children}
      </Stack>
    </div>
  );
};

export default ProductLayout;
