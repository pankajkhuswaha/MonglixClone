import {
  Login,
  Viewpage,
  PageNotFound,
  Productpage,
  ProductDetail,
  Checkout,
  UserDetails,
  About,
} from "../pages";
import Admin from "../pages/admin";
import ContactUs from "../pages/admin/pages/contactus/ContactUs";
import Address from "../pages/product/Address";

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
    path: "/checkout-details",
    Element: <Address />,
  },
  {
    path: "/contact",
    Element: <ContactUs />,
  },
  {
    path: "/about",
    Element: <About />,
  },
  {
    path: "/users/*",
    Element: <UserDetails />,
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
