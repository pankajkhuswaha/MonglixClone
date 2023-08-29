import {
  Login,
  Viewpage,
  PageNotFound,
  Productpage,
  ProductDetail,
} from "../pages";
import Admin from "../pages/admin";

export const Routess = [
  {
    path: "/",
    Element: <Viewpage />,
  },
  {
    path: "/login",
    Element: <Login />,
  },
  {
    path: "/products",
    Element: <Productpage />,
  },
  {
    path: "/products/:_id",
    Element: <ProductDetail />,
  },
  {
    path: "*",
    Element: <PageNotFound />,
  },
  {
    path: "/admin/*",
    Element: <Admin />,
  },
];
