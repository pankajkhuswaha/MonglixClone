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

import { alert } from '@material-tailwind/react';
import React from 'react'
import {Datatable} from  'react-ele2'
const App = () => {
const columns = [
  {
    headerName: "Name",
    field: "name",
    width: 140,
  },
  {
    headerName: "Email",
    field: "email",
    width: 200,
  },
];

const data = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Doe", email: "jane@example.com" },
  { name: "Alice Smith", email: "alice@example.com" },
  { name: "Bob Johnson", email: "bob@example.com" },
  { name: "Eva Williams", email: "eva@example.com" },
  { name: "Charlie Brown", email: "charlie@example.com" },
  { name: "Linda Davis", email: "linda@example.com" },
  { name: "Michael Miller", email: "michael@example.com" },
  { name: "Olivia Moore", email: "olivia@example.com" },
  { name: "David Wilson", email: "david@example.com" },
];

return (
  <div
    style={{
      display: "flex",
      gap: "10px",
      flexDirection: "column",
      padding: "10px",
    }}
  >
    <Datatable
      data={data}
      cols={columns}
      pagination
      actionButtons={{
        onEditBtnCLick: (data) => {
        window.alert(data)
        }
      }}
      selection
    />
    {/* <Jhevbutton label={"add to cart"} /> */}
  </div>
);
}

export default App