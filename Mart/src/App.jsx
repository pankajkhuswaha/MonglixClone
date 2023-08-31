import { useEffect } from "react";
import Layout from "./layout/Layout";
import Errorpage from "./pages/404/Errorpage";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { getProducts } from "./features/ProductSlice";
import { userCart } from "./features/cartSlice";
import { useDispatch } from "react-redux";
import { Routess } from "./routes/Routes";
import { VerifyApi } from "./features/authSlice";
import Loading from "./features/loading/Loader";
import "react-quill/dist/quill.snow.css";
import { getSiteConfig } from "./features/Website/configSlice";

const App = () => {
  const dispatch = useDispatch();
  const { error, success } = useSelector((state) => state.auth);
  // const { carts } = useSelector((state) => state.cart);
  const isLoading = useSelector((state) => state.loading.show);

  const verifyToken = () => {
    dispatch(VerifyApi());

    if (success) {
      toast.success("sucesss");
    } else if (error) {
      toast.error("error");
    }
  };

  useEffect(() => {
    verifyToken();
    dispatch(getProducts());
    dispatch(userCart());
    dispatch(getSiteConfig());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      <ToastContainer />
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
