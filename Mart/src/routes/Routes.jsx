import {
  Login,
  Viewpage,
  PageNotFound,
  Productpage,
  ProductDetail,
  Checkout,
} from "../pages";
import Admin from "../pages/admin";
import ContactUs from "../pages/admin/pages/contactus/ContactUs";

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
    path: "/contact",
    Element: <ContactUs />,
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
