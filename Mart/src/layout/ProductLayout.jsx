import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Buttonele from "../components/button/Buttonele";
import Skeleton from "@mui/material/Skeleton";
import { useSelector, useDispatch } from "react-redux";
import { fILTERProductApibycategory } from "../features/ProductSlice";

const ProductLayout = (props) => {
  const navigate = useNavigate();
  const { title } = props;
  const site = useSelector((st) => st.site.data);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSeeAllClick = () => {
    setLoading(true);

    const selectedCategory = title;

    dispatch(fILTERProductApibycategory(selectedCategory));
    navigate('/product')
  };

  return (
    <div className="container p-0">
      <Stack p={{ xs: 1, md: 3 }}>
        <Stack
          p={{ xs: 1, md: 2 }}
          borderRadius={2}
          alignItems={"center"}
          sx={{ backgroundColor: site.secondarybg }}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          {loading ? (
            <Skeleton width="20%" />
          ) : (
            <h1 className="md:text-[24px] text-[18px] text-gray-700 font-bold">
              {props.title}
            </h1>
          )}

          <Buttonele
            width={'80%'}
            title={"See All"}
            onClick={handleSeeAllClick}
            disabled={loading}
          />
        </Stack>
  
        {props.children}
      </Stack>
    </div>
  );
};

export default ProductLayout;
