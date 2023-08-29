import React from "react";
import { Header, Footer } from "../components/Index";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const isAtAdmin = useLocation().pathname.includes("admin")
  return (
    <>
      {!isAtAdmin && <Header />}
      {props.children}
      {!isAtAdmin && <Footer />}
    </>
  );
};

export default Layout;
