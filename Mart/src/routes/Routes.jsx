import {
  Login,
  Viewpage,
  PageNotFound,
  Productpage,
  ProductDetail,
} from "../pages";

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
];
