// import { useEffect } from "react";
// import Layout from "./layout/Layout";
// import Errorpage from "./pages/404/Errorpage";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Stack } from "@mui/material";
// import { Route, Routes } from "react-router-dom";
// import { getProducts } from "./features/ProductSlice";
// import { userCart } from "./features/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Routess } from "./routes/Routes";
// import { VerifyApi } from "./features/authSlice";

// import Loading from "./features/loading/Loader";
// import "react-quill/dist/quill.snow.css";
// import { getSiteConfig } from "./features/Website/configSlice";

// const App = () => {
//   const dispatch = useDispatch();
//   const { error, success } = useSelector((state) => state.auth);
//   const isLoading = useSelector((state) => state.products.loading);

//   const verifyToken = () => {
//     dispatch(VerifyApi());

//     if (success) {
//       return;
//     } else if (error) {
//       toast.error("error");
//     }
//   };

//   useEffect(() => {
//     verifyToken();
//     dispatch(getProducts());
//     dispatch(userCart());
//     dispatch(getSiteConfig());
//   }, []);

//   return (
//     <>
//       {isLoading && <Loading />}

//       <ToastContainer />
//       {error ? (
//         <Errorpage />
//       ) : (
//         <Layout>
//           <Stack sx={{ padding: { sm: "12px", md: "30px" } }}>
//             <Routes>
//               {Routess.map((ele, id) => {
//                 return (
//                   <Route key={id} path={ele.path} element={ele.Element}></Route>
//                 );
//               })}
//             </Routes>
//           </Stack>
//         </Layout>
//       )}
//     </>
//   );
// };

// export default App;




import React, { useEffect } from 'react'
import { useRef } from 'react'
const App = () => {
    useEffect(() => {
      console.log("the component have been rendered");
    });
  const ref = useRef(4);
  const handleClick = () => {
    ref.current = ref.current + 1
    console.log("You clicked " + ref.current + " times!");
  }
  return (
    <>
      <button onClick={handleClick}>clickme{ref.current}</button>
    </>
  );
}

export default App
// import React, { useEffect, useState } from "react";

// const App = () => {
//    useEffect(() => {
//      console.log("the component have been rendered");
//    });
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log("You clicked " + count + " times!");
//   };

//   return (
//     <>
//       <button onClick={handleClick}>click me{count }</button>
//     </>
//   );
// };

// export default App;
