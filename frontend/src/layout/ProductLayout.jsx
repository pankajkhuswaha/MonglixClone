/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Buttonele from "../components/button/Buttonele";
import { useSelector, useDispatch } from "react-redux";
import { AllFilterApi } from "../features/ProductSlice";
import { unwrapResult } from "@reduxjs/toolkit";

export const handleSeeAllClick = (dispatch, navigate, title) => {
  const type = "category";
  const value = title;
  dispatch(AllFilterApi({ type, value }))
    .then(unwrapResult)
    .then(() => navigate("/product"));
};

const ProductLayout = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line react/prop-types
  const { title } = props;
  const site = useSelector((st) => st.site.data);

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
      
            <h1 className="md:text-[24px] capitalize text-[18px] text-gray-700 font-bold">
              {title}
            </h1>
    

          <Buttonele
            width={"80%"}
            title={"See All"}
            onClick={() => handleSeeAllClick(dispatch, navigate, title)}

          />
        </Stack>

        {props.children}
      </Stack>
    </div>
  );
};

export default ProductLayout;
