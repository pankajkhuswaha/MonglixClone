import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Errorpage from "./pages/404/Errorpage";
import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Login, Viewpage, PageNotFound, Productpage } from "./pages";
import { Imagecarousel } from "./components/Index";
import { getProducts } from "./features/ProductSlice";
import { useDispatch } from "react-redux";
import { Routess } from "./routes/Routes";
const App = () => {
  const error = useSelector((state) => state.products.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <Errorpage />
      ) : (
        <Layout>
          <Stack padding={"20px"}>
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
