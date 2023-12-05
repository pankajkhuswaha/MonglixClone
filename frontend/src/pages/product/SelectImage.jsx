/* eslint-disable react/prop-types */
import { useState } from "react";

const SelectImage = ({ img }) => {
  const [selectedPic, setSelectedPic] = useState(img && img[0]);

  const handleImageClick = (ele) => {
    setSelectedPic(ele);
  };

  return (
    <>
      <div className="justify-between p-3">
        <div className="flex flex-col items-center gap-2 ">
          <div className="w-[250px] h-[350px] flex rounded-sm bg-white">
            <img
            loading="lazy"
              src={selectedPic && selectedPic}
              width={"100%"}
              height={"80%"}
              style={{ objectFit: "contain", height: "100%" }}
            />
          </div>
       
            <div className="flex w-full"
             
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
                      loading="lazy"
                        style={imageStyle}
                        className="w-[70px]  object-contain h-[70px]"
                        src={ele}
                        onClick={() => handleImageClick(ele)}
                      />
                    </div>
                  );
                })}
            </div>
     
        </div>
      </div>
    </>
  );
};

export default SelectImage;
