import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Stack, Badge } from "@mui/material";
import TopDrawer from "../bottomdrawer/TopDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from "react-router-dom";
import './index.css'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { SearchComponent, BtmDrawer } from "../Index";
import  DropDownHeaDER from "./DropDownHeaDER.JSX";
const Header = () => {
  const cart = useSelector((state) => state.cart.carts);
  const site = useSelector((st) => st.site.data);
  const CartCount = cart.products?.length;
  const users = useSelector((state) => state.auth.user?.user);
  const currentuser = users?.name;
  const location = useLocation();
  const [showDivOnScroll, setShowDivOnScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowDivOnScroll(true);
    } else {
      setShowDivOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        background: site.primarybg,
        boxShadow: "0 2px 15px rgba(0,0,0,.15)",
        width: "100%",
        padding: "1px",
        position: showDivOnScroll ? "sticky" : "relative",
        top: 0,
        zIndex: 99,
      }}
    >
      <div className="container">
        <Stack display={"flex"} padding={site.logo ? "4px" : "14px"}>
          <Stack
            className="a"
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {!showDivOnScroll ? (
              <>
                {site.logo ? (
                  <Link to={"/"}>
                    <img
                
                      className="w-[100px] h-[50px] md:w-[120px] md:h-[60px]"
                      src={site.logo}
                      alt="logo"
                    />
                  </Link>
                ) : (
                  <Link
                    to={"/"}
                    style={{
                      color: site.primarybg,
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    {site.name}
                  </Link>
                )}
              </>
            ) : (
              <DropDownHeaDER />
            )}
            <Stack display={{ xs: "none ", md: "block" }}>
              <SearchComponent style={{ color: "white" }} />
            </Stack>

            <Stack
              flexDirection={"row"}
              gap={{ xs: 2, md: 4 }}
              alignItems={"center"}
            >
              <div className="flex gap-2 md:hidden">
                <BtmDrawer className="text-white" />
                <TopDrawer className="text-white" />
              </div>
              <div className="p-2  md:flex flex-col items-center hidden   rounded-lg">
                <p className=" text-white">Customer Services</p>
                <a href="tel:7678536510" className=" text-white text-bold text-xl">+917678536510</a>
              </div>
            </Stack>
          </Stack>

     {location.pathname === "/" && 
     <div
       className=" heads w-[100vh] p-3 justify-around  "
       style={{
         borderTop: "1px solid #180000",
         borderColor: "black",
         flexDirection: "row",
         gap: "24px",
         boxShadow: "0 12px 15px rgba(0,0,0,.15)",
         background: site.primarybg,       
         position: "fixed",
         display: showDivOnScroll ? "none" : "flex",
         top: showDivOnScroll ? 0 : 75,
         right: 0,
         width: "100%",
         zIndex: 9,
       }}
     >
       <DropDownHeaDER/>
       <div className="flex gap-8">
         <Link to={"/"}>
           <p className="text-white text-[17px] ">Home</p>
         </Link>
         <Link to={"/about"}>
           <p className="text-white text-[17px] ">About</p>
         </Link>
         <Link to={"/contact"}>
           <p className="text-white text-[17px] ">Contact Us</p>
         </Link>
         <Link to={"/product"}>
           <p className="text-white text-[17px] ">Store</p>
         </Link>
       </div>
       <div className="flex items-center  gap-3">
         {users ? (
           <Link to={"/checkout"}>
             <Badge badgeContent={CartCount} color="primary">
               <ShoppingBagOutlinedIcon  className= "text-white" />
             </Badge>
           </Link>
         ) : (
           <Link to="/login">
             <Badge badgeContent={CartCount} color="primary">
               <ShoppingBagOutlinedIcon
                 className="text-white"
                 style={{ fontSize: "26px" }}
               />
             </Badge>
           </Link>
         )}
         {currentuser ? (
           <Link className="hidden md:flex gap-2"   to={"/users"}>
             <AccountCircleIcon className="text-white" />
            <p className="text-md text-white">User</p>
           </Link>
         ) : (
           <Link to={"/login"}>
             <div className="flex gap-1 flex-row">
               <PersonOutlineIcon
                 className="text-white"
                
               />
               <p  className="text-white">Login & SignUp</p>
            
             </div>
           </Link>
         )}
       </div>
     </div>
}
        </Stack>
      </div>
    </div>
  );
};

export default Header;
