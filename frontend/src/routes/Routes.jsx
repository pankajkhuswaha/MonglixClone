import {
  Login,
  Viewpage,
  PageNotFound,
  Productpage,
  ProductDetail,
  Checkout,
  UserDetails,
  About,
  Bulk
} from "../pages";
import Admin from "../pages/admin";
import ContactUs from "../pages/admin/pages/contactus/ContactUs";
import Address from "../pages/product/Address";
import { Return, Accesibility, TC, PrivacyPolicy } from "../pages/Legal/index";
import SignUpOTP from "../pages/login/singnupOtp";


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
    path: "/signup",
    Element: <SignUpOTP />,
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
    path: "/return",
    Element: <Return />,
  },
  {
    path: "/bulk",
    Element: <Bulk />,
  },
  {
    path: "/accesibility",
    Element: <Accesibility />,
  },
  {
    path: "/privacyPolicy",
    Element: <PrivacyPolicy />,
  },
  {
    path: "/tc",
    Element: <TC />,
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
