/* eslint-disable react/prop-types */

import { Header, Footer } from "../components/Index";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const isAtAdmin = useLocation().pathname.includes("admin")
  const site = useSelector((st) => st.site.data);

  return (
    <div style={{background:site.mainbg}}>
      {!isAtAdmin && <Header />}
      <div className="relative">

      {props.children}
      </div>
      {!isAtAdmin && <Footer />}
    </div>
  );
};

export default Layout;
