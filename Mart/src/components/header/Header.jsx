import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Stack, Badge } from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { SearchComponent, BtmDrawer } from "../Index";
import { toast } from "react-toastify";

const Header = () => {
  const cart = useSelector((state) => state.cart.carts);
  const CartCount = cart.products?.length;
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    toast.success("logout Successfull");
  };
  const users = useSelector((state) => state.auth.user);
  const currentuser = users.user?.name;
  const location = useLocation();
  const data = useSelector((state) => state.products.products);
  const categories = [...new Set(data.map((item) => item.category))];

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
    <>
      <Stack
        sx={{ backgroundColor: "#F8FAFC" }}
        position={"STICKY"}
        boxShadow={"0 2px 15px rgba(0,0,0,.15)"}
        width={"100%"}
        top={0}
        padding={"14px"}
        display={"flex"}
        zIndex={99}
      >
        <Stack
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <h1
            style={{ color: "orangered", fontWeight: "bold", fontSize: "30px" }}
          >
            Logo
          </h1>
          <SearchComponent />
          <Stack flexDirection={"row"} gap={4} alignItems={"center"}>
            <Link to={"/checkout"}>
              <Badge badgeContent={CartCount} color="primary">
                <ShoppingBagOutlinedIcon />
              </Badge>
            </Link>

            {currentuser ? (
              <button onClick={handleLogout}>
                <p>{currentuser}</p>{" "}
              </button>
            ) : (
              <Link to={"/login"}>
                <AccountBoxIcon />
              </Link>
            )}

            <Stack display={{ sx: "block", md: "none" }}>
              <BtmDrawer />
            </Stack>
          </Stack>
        </Stack>

        {location.pathname === "/" && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "24px",
              borderTop: "1px solid #E8F0FE",
              boxShadow: "0 12px 15px rgba(0,0,0,.15)",
              transition: "0.2s",
              opacity: showDivOnScroll ? 1 : 0,
              backgroundColor: "white",
              padding: "10px",
              position: "fixed",
              top: 78,
              right: 0,
              width: "100%",
              zIndex: 9,
            }}
          >
            {categories.map((ele, i) => {
              return (
                <Stack
                  key={i}
                  flexDirection={"row"}
                  gap={3}
                  justifyContent={"center"}
                >
                  <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                    <p className=" text-gray-600 text-[17px]">{ele}</p>
                  </Stack>
                </Stack>
              );
            })}
          </div>
        )}
      </Stack>
    </>
  );
};

export default Header;
