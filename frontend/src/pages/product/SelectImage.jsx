import React, { useState } from "react";
import { Stack, CardContent } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addCart, userCart } from "../../features/cartSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const SelectImage = ({ img, data }) => {

  const users = useSelector((state) => state.auth.user);
  const currentuser = users.user?.name;
  const [selectedPic, setSelectedPic] = useState(img && img[0]);

  const handleImageClick = (ele) => {
    setSelectedPic(ele);
  };

  return (
    <>
      <Stack justifyContent={"space-between"} p={3}>
        <Stack
          direction={{ xs: "column-reverse", sm: "row" }}
          gap={{ sx: 1, sm: 1, md: 1 }}
          flexWrap={"wrap"}
        >
          <CardContent
            sx={{
              width: "120px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack
              width={62}
              flexDirection={{ xs: "row-reverse", sm: "column" }}
              gap={2}
              style={{ objectFit: "contain" }}
            >
              {img &&
                img.map((ele, index) => {
                  const isSelected = selectedPic === ele;
                  const imageStyle = {
                    cursor: "pointer",
                    border: isSelected
                      ? "1px solid rgb(255,66,104)"
                      : "2px solid transparent",
                  };

                  return (
                    <img
                      key={index}
                      src={ele}
                      style={imageStyle}
                      onClick={() => handleImageClick(ele)}
                    />
                  );
                })}
            </Stack>
          </CardContent>
          <div className="w-[350px] h-[490px] border-1 rounded-sm bg-white">
            <img
              src={selectedPic && selectedPic}
              width={"100%"}
              height={"80%"}
              style={{ objectFit: "contain", height: "100%" }}
            />
          </div>
        </Stack>

        {/* {currentuser && (
          <div className="p-5 ">
            <Stack
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-evenly"}
            >
              <button
                style={{
                  color: site?.primarybg,
                  borderColor: site?.primarybg,
                }}
                className="text-[15px]   flex align-center justify-center gap-2 border-1 p-3 rounded-md border-[#9F2089]  w-[200px]"
              >
                <svg
                  style={{
                    fill: site?.primarybg,
                  }}
                  className="relative top-[3px]"
                  width="21"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  ml="4"
                  mr="4"
                  stroke="transparent"
          
                  icon="[object Object]"
                  iconsize="20"
                >
                  <g
                    clipPath="url(#go-to-cart_svg__a)"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M.75 1.5A.75.75 0 0 1 1.5.75h2.084a1.75 1.75 0 0 1 1.68 1.262L6.05 4.72h12.625a1.75 1.75 0 0 1 1.683 2.23L18.661 12.9a1.75 1.75 0 0 1-1.683 1.27H8.303a1.75 1.75 0 0 1-1.695-1.315l-1.845-7.19-.94-3.236a.25.25 0 0 0-.24-.18H1.5a.75.75 0 0 1-.75-.75Zm5.703 4.719 1.608 6.264a.25.25 0 0 0 .242.188h8.675a.25.25 0 0 0 .24-.181l1.698-5.952a.25.25 0 0 0-.24-.319H6.452ZM9.923 16.238a.5.5 0 0 0-.493.506.5.5 0 0 0 .493.506.5.5 0 0 0 .493-.506.5.5 0 0 0-.493-.506Zm-1.993.506a2 2 0 0 1 1.993-2.006 2 2 0 0 1 1.993 2.006 2 2 0 0 1-1.993 2.006 2 2 0 0 1-1.993-2.006ZM15.72 16.238a.5.5 0 0 0-.493.506.5.5 0 0 0 .493.506.5.5 0 0 0 .493-.506.5.5 0 0 0-.493-.506Zm-1.993.506a2 2 0 0 1 1.993-2.006 2 2 0 0 1 1.993 2.006 2 2 0 0 1-1.993 2.006 2 2 0 0 1-1.993-2.006Z"></path>
                  </g>
                  <defs>
                    <clipPath id="go-to-cart_svg__a">
                      <path
                        fill="#fff"
                        transform="translate(.5)"
                        d="M0 0h20v20H0z"
                      ></path>
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-lg font-[600]" color="#9F2089">
                  Add to Cart
                </span>
              </button>
             
            </Stack>
            <br />
            <hr />
          </div>
        )} */}
      </Stack>
    </>
  );
};

export default SelectImage;
