import { Stack } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { handleSeeAllClick } from "../../layout/ProductLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DropDownHeaDER = () => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const data = useSelector((state) => state.products.products);
  const categories = [...new Set(data.map((ele) => ele.category))];

  return (
    <>
      <div className="relative">
        <div
          onMouseEnter={() => setIsShown(true)}
          className="flex gap-2 items-center relative cursor-pointer"
        >
          <CiMenuBurger className="text-white text-2xl" />
          <p className="text-white font-bolder md:text-xl text-md ">Shop By Category</p>
        </div>

        {/* menus */}
        {isShown && (
          <div
            onMouseLeave={() => setIsShown(false)}
            className="absolute cursor-pointer bg-white top-[32px] shadow-md rounded-md "
          >
            {categories.map((ele, i) => {
              return (
                <Stack
                  key={i}
                  padding={"8px"}
                  flexDirection={"row"}
                  gap={1}
                  sx={{ overflowX: "auto" }}
                >
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    padding={0.5}
                  >
                    <div className="w-full">
                      <p
                        onClick={() =>
                          handleSeeAllClick(dispatch, navigate, ele)
                        }
                        style={{ textWrap: "nowrap" }}
                        className="w-full cursor-pointer px-1 text-gray-600  text-[16px] "
                      >
                        {ele}
                      </p>
                    </div>
                  </Stack>
                </Stack>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownHeaDER;
