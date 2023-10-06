import React, { useState } from "react";
import './sidebar.css'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { AllFilterApi } from "../../features/ProductSlice";
export function SideFilter() {


  const dispatch = useDispatch();
 const handleSeeAllClick = (types, title) => {
  const type = types;
  const value = title;
  dispatch(AllFilterApi({ type, value }))

};

  const data = useSelector((state) => state.products.products);

  const categories = [...new Set(data.map((ele) => ele.category))];
  const [openCategory, setOpenCategory] = useState(null);
  const Brands = [...new Set(data.map((ele) => ele.brand))];
  const handleOpenCategory = (ele) => {
    setOpenCategory(openCategory === ele ? null : ele);
  };

  return (
    <>
      <div className="p-3 sticky rounded-lg bg-white h-[100vh]  shadow-md">
        <h1 className="text-lg text-black font-semibold mb-3">Category</h1>
        {categories.map((ele, id) => {
          const subcategories = data
            .filter((elem) => elem.category === ele)
            .map((elem) => elem.subcategory);
          const newsub = [...new Set(subcategories)];
          return (
            <Accordion key={id} open={openCategory === ele}>
              <AccordionHeader
                className="   p-1 "
                onClick={() => handleOpenCategory(ele)}
              >
                <div className=" flex gap-2 items-center">
                  {openCategory === ele ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}

                  <p
                    onClick={() => handleSeeAllClick("category", ele)}
                    className="text-lg  text-gray-800"
                  >
                    {ele}
                  </p>
                </div>
              </AccordionHeader>
              {id < categories.length - 1 && <hr className="pt-2  " />}

              <AccordionBody className=" p-1">
                {newsub.map((subcategory, subId) => (
                  <div
                    className="pl-7  pb-2  flex gap-2 items-center"
                    key={subId}
                  >
                    <p
                      onClick={() =>
                        handleSeeAllClick("subcategory", subcategory)
                      }
                      className="cursor-pointer text-gray-600 p-1 font-semibold text-[17px]"
                    >
                      {subcategory}
                    </p>
                  </div>
                ))}
              </AccordionBody>
            </Accordion>
          );
        })}
        <hr />
        <h1 className="text-lg text-black font-semibold mt-3 mb-2">Brand</h1>
        <div className="flex  flex-col gap-0">
          {Brands.map((ele, id) => (
            <label
              onClick={() => handleSeeAllClick("brand", ele)}
              key={id}
              className="flex gap-0 pl-3 contain justify-start"
            >
              <input
                className="text-3xl "
                type="radio"
                name="brand"
                value={ele}
              />
              <span className="checkmark"></span>

              <p className=" text-gray-800 p-1 font-semibold text-[17px]">
                {ele}
              </p>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
