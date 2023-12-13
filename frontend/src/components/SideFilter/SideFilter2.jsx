import { useState } from "react";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleSeeAllClick } from "../../layout/ProductLayout";

export function SideFilter2() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const data = useSelector((state) => state.products.products);
  const categories = [...new Set(data.map((ele) => ele.category))];
  const [openCategory, setOpenCategory] = useState(false);

  const handleOpenCategory = () => {
    setOpenCategory(!openCategory);
  };



  return (
    <>
      <div className="md:pr-8 pl-8 fixed left-[190px] top-[94px]  rounded-lg bg-white   md:shadow-md">
        <details open={openCategory}>
          <summary className="p-1 font-bolder text-md text-gray-600" onClick={handleOpenCategory}>
              Shop By  Categories
          </summary>
          <div className="p-1">
        
         {categories.map((ele, i) => {
                return (
                  <Stack
                    key={i}
                    padding={'8px'}
                    flexDirection={"row"}
   
                    gap={3}
                    sx={{ overflowX: "auto" }}
                 
                  >
                    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                      <p
                        onClick={() =>
                          handleSeeAllClick(dispatch, navigate, ele)
                        }
                        style={{ textWrap: "nowrap" }}
                        className=" cursor-pointer  px-1 text-gray-600 text-[16px]"
                      >
                        {ele}
                      </p>
                    </Stack>
                  </Stack>
                );
              })}
          </div>
        </details>
      </div>
    </>
  );
}
