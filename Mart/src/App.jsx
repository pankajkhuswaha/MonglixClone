import { useEffect } from "react";
import Layout from "./layout/Layout";
import Errorpage from "./pages/404/Errorpage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { getProducts } from "./features/ProductSlice";
import { userCart } from "./features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Routess } from "./routes/Routes";
import { VerifyApi } from "./features/authSlice";

import Loading from "./features/loading/Loader";
import "react-quill/dist/quill.snow.css";
import { getSiteConfig } from "./features/Website/configSlice";

const App = () => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.auth);
  const isLoading = useSelector((state) => state.products.loading);
  const loader = useSelector((state) => state.loading.show);

  const verifyToken = () => {
    dispatch(VerifyApi());

    if (success) {
      return;
    } else if (error) {
      toast.error("error");
    }
  };

  useEffect(() => {
    verifyToken();
    dispatch(getProducts());
    dispatch(userCart());
    dispatch(getSiteConfig());
  }, []);

  return (
    <>
      {(isLoading) && <Loading />}
      {(loader) && <Loading />}

      <ToastContainer />
      {error ? (
        <Errorpage />
      ) : (
        <Layout>
          <Stack sx={{ padding: { sm: "12px", md: "30px" } }}>
            <Routes>
              {Routess.map((ele, id) => {
                return (
                  <Route key={id} path={ele.path} element={ele.Element}></Route>
                );
              })}
            </Routes>
          </Stack>
        </Layout>
      )}
    </>
  );
};

export default App;

// import { useState } from "react";

// export default function App() {
//   const [timer, setTimer] = useState(0);

//   const startTimer = () => {
//     window.myTimer = setInterval(() => {
//       setTimer((timer) => timer + 1);
//     }, 1000);
//   };
//   const stopTimer = () => {
//     clearInterval(window.myTimer);
//   };
//   const resetTimer = () => {
//     clearInterval(window.myTimer);
//     setTimer(0);
//   };
//   return (
//     <div className="container">
//       <h1>Timer</h1>
//       <span>{Math.trunc(timer / 60)} mins </span>
//       <span>{timer % 60} secs</span>
//       <div>
//         <button onClick={startTimer}>Start</button>
//         <button onClick={stopTimer}>Stop</button>
//         <button onClick={resetTimer}>Reset</button>
//       </div>
//     </div>
//   );
// }



// // import React from "react";

// // export default function App() {
// //   const [count, setCount] = React.useState(0);
// //   const [timeLeft, setTimeLeft] = React.useState(10);
// //   const id = React.useRef(null);

// //   const clear = () => window.clearInterval(id.current);

// //   React.useEffect(() => {
// //     id.current = window.setInterval(() => {
// //       setTimeLeft((time) => time - 1);
// //     }, 1000);

// //     return clear;
// //   }, []);

// //   React.useEffect(() => {
// //     if (timeLeft === 0) {
// //       clear();
// //     }
// //   }, [timeLeft]);

// //   return (
// //     <div className="App">
// //       <h1>{count}</h1>
// //       <h3>Time left: {timeLeft} seconds</h3>
// //       {timeLeft === 0 ? null : (
// //         <button onClick={() => setCount((c) => c + 1)}>+</button>
// //       )}
// //     </div>
// //   );
// // }