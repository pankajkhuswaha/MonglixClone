import {
  Login,
  Viewpage,
  PageNotFound,
  Productpage,
  ProductDetail,
  Checkout,
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
    path: "/product",
    Element: <Productpage />,
  },
  {
    path: "/products/:_id",
    Element: <ProductDetail />,
  },
  {
    path: "/checkout",
    Element: <Checkout />,
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
