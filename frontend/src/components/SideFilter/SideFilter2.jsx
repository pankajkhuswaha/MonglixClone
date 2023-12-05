// // import React, { useState } from "react";
// // import './sidebar.css'
// // import {
// //   Accordion,
// //   AccordionHeader,
// //   AccordionBody,
// // } from "@material-tailwind/react";
// // import { useDispatch, useSelector } from "react-redux";
// // import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// // import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// // import { AllFilterApi } from "../../features/ProductSlice";
// // export function SideFilter2() {


// //   const dispatch = useDispatch();
// //  const handleSeeAllClick = (types, title) => {
// //   const type = types;
// //   const value = title;
// //   dispatch(AllFilterApi({ type, value }))

// // };

// //   const data = useSelector((state) => state.products.products);

// //   const categories = [...new Set(data.map((ele) => ele.category))];
// //   console.log(categories);
// //   const [openCategory, setOpenCategory] = useState(null);


// //   return (
// //     <>
// //       <div className="md:p-3 fixed left-[200px] rounded-lg bg-white   md:shadow-md">
   
     
// //             <Accordion >
// //               <AccordionHeader
// //                 className="   p-1 "
// //                 onClick={() => handleOpenCategory()}
// //               >
// //                 Category
// //               </AccordionHeader>
              

// //               <AccordionBody className=" p-1">
// //                sgh
// //               </AccordionBody>
// //             </Accordion>

    
      
// //       </div>
// //     </>
// //   );
// // }


// import React, { useState } from "react";
// import "./sidebar.css";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
// import { useDispatch, useSelector } from "react-redux";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { AllFilterApi } from "../../features/ProductSlice";

// export function SideFilter2() {
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.products.products);
//   const categories = [...new Set(data.map((ele) => ele.category))];
//   const [openCategory, setOpenCategory] = useState(false);

//   const handleOpenCategory = () => {
//     setOpenCategory(!openCategory);
//   };

//   const handleSeeAllClick = (types, title) => {
//     const type = types;
//     const value = title;
//     dispatch(AllFilterApi({ type, value }));
//   };

//   return (
//     <>
//       <div className="md:p-3 fixed left-[200px] rounded-lg bg-white   md:shadow-md">
//         <Accordion>
//           <AccordionHeader className="p-1" onClick={handleOpenCategory}>
//             Category
//           </AccordionHeader>

//           <AccordionBody className="p-1" show={openCategory}>
//             {/* Render your categories here */}
//             {categories.map((category, index) => (
//               <div key={index} onClick={() => handleSeeAllClick("category", category)}>
//                 {category}
//               </div>
//             ))}
//           </AccordionBody>
//         </Accordion>
//       </div>
//     </>
//   );
// }



import React, { useState } from "react";
import "./sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { AllFilterApi } from "../../features/ProductSlice";
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
