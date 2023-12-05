/* eslint-disable react/prop-types */
import { useState } from "react";
import { Stack, CardContent } from "@mui/material";

const SelectImage = ({ img }) => {
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
                    <div className="w-[100px]  h-[100px]" key={index}>
                      <img
                        style={imageStyle}
                        className="w-[70px]  object-contain h-[70px]"
                        src={ele}
                        onClick={() => handleImageClick(ele)}
                      />
                    </div>
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
      </Stack>
    </>
  );
};

export default SelectImage;
