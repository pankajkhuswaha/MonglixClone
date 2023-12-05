  import Layout from "./layout/Layout";
  import { useQueries } from "@tanstack/react-query";

  import Errorpage from "./pages/404/Errorpage";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import { Stack } from "@mui/material";
  import { adduser } from "./features/authSlice";
  import { Link, Route, Routes } from "react-router-dom";
  import { userCart, getSiteConfigs } from "./utils/Apis";
  import { addcarts } from "./features/cartSlice";
  import { useDispatch, useSelector } from "react-redux";
  import { Routess } from "./routes/Routes";
  import Loading from "./features/loading/Loader";
  import "react-quill/dist/quill.snow.css";
  import { webconfig } from "./features/Website/configSlice";
  import { Test } from "./pages/user/pages/testPayment";
  import { VerifyApis, getProducts } from "./utils/Apis";
  import { includeProducts } from "./features/ProductSlice";
  const App = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) =>  state.auth.user);
    const { error } = useSelector((state) => state.auth);

    const [productApi, VerifyApi, Cart, WebsiteConfig] = useQueries({
      queries: [
        { queryKey: ["productApi"], queryFn: () => getProducts() },
        { queryKey: ["VerifyApi"], queryFn: VerifyApis },
        { queryKey: ["CartApi"], queryFn: () => userCart() },
        { queryKey: ["WebApi"], queryFn: () => getSiteConfigs(),  refetchOnWindowFocus: true, },
      ],
    });

    
    if (VerifyApi.isSuccess) {
      dispatch(adduser(VerifyApi?.data));
    }
    if (productApi.isSuccess) {
      dispatch(includeProducts(productApi?.data));
    }
    if (productApi.isError) {
  console.log(productApi.error.message);
    }
    if (Cart.isSuccess) {
      dispatch(addcarts(Cart?.data));
    }
      if (WebsiteConfig.isSuccess) {
        dispatch(webconfig(WebsiteConfig?.data));
      }
    return (
      <>
        {productApi.isLoading && <Loading />}
        {/* {loader && <Loading />} */}

        <ToastContainer />
        {error ? (
          <Errorpage />
        ) : (
          <Layout>
            <Stack sx={{ padding: { sm: "12px", md: "30px" } }}>
              <Routes>
                {Routess?.map((ele, id) => {
                  return (
                    <Route key={id} path={ele.path} element={ele.Element}></Route>
                  );
                })}
                <Route path={"/test"} element={<Test />}></Route>
              </Routes>
              {users?.user?.role === "admin" && (
                <Link to={"/admin"}>
                  <button className="fixed bottom-10 p-3 shadow-xl text-white rounded-md font-bold bg-blue-500">
                    Go To DashBoard →
                  </button>
                </Link>
              )}
            </Stack>
          </Layout>
        )}
      </>
    );
  };

  export default App;


