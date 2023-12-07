import { lazy } from "react";
import {
  Login,
  Viewpage,
  PageNotFound,
  Productpage,
  ProductDetail,
  Checkout,
  UserDetails,
  About,
  Bulk,
} from "../pages";

import { Return, Accesibility, TC, PrivacyPolicy } from "../pages/Legal/index";

const Admin = lazy(() => import("../pages/admin"));
const ContactUs = lazy(() => import("../pages/admin/pages/contactus"));
const ForgotPasswordPage = lazy(() =>
  import("../pages/login/ForgotPasswordPage")
);
const Address = lazy(() => import("../pages/product/Address"));

const SignUpOTP = lazy(() => import("../pages/login/singnupOtp"));
const ResetPassword = lazy(() => import("../pages/login/ResetPassword"));

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
    path: "/forgot-password",
    Element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password/:id",
    Element: <ResetPassword />,
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
