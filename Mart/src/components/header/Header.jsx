import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Stack, Badge } from "@mui/material";
import TopDrawer from "../bottomdrawer/TopDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { SearchComponent, BtmDrawer } from "../Index";

const Header = () => {
  const cart = useSelector((state) => state.cart.carts);
  const site = useSelector((st) => st.site.data);
  const CartCount = cart.products?.length;
  const users = useSelector((state) => state.auth.user?.user);
  const currentuser = users?.name;
  const location = useLocation();
  const data = useSelector((state) => state.products.products);
  const categories = ["All", ...new Set(data.map((item) => item.category))];

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
        background: site.headerCol,
        boxShadow: "0 2px 15px rgba(0,0,0,.15)",
        width: "100%",
        position: "sticky",
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
            {site.logo ? (
              <Link to={"/"}>
                <img
                  style={{
                    width: "120px",
                    height: "60px",
                    mixBlendMode: "darken",
                  }}
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
            <Stack display={{ xs: "none ", md: "block" }}>
              <SearchComponent />
            </Stack>

            <Stack
              flexDirection={"row"}
              gap={{ xs: 2, md: 4 }}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                gap={{ xs: 2, md: 4 }}
                display={{ sm: "block", md: "none" }}
              >
                <BtmDrawer />
                <TopDrawer />
              </Stack>

              {users ? (
                <Link to={"/checkout"}>
                  <Badge badgeContent={CartCount} color="primary">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </Link>
              ) : (
                <Link to="/login">
                  <Badge badgeContent={CartCount} color="primary">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </Link>
              )}
              {currentuser ? (
                <Link to={"/users"}>
                  <AccountCircleIcon />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <AccountBoxIcon />
                </Link>
              )}
            </Stack>
          </Stack>
          {location.pathname === "/" && (
            <div
              className="hidden md:flex "
              style={{
                overflowX: "auto",
               
                flexDirection: "row",
                justifyContent: "center",
                gap: "24px",
                borderTop: "1px solid #E8F0FE",
                boxShadow: "0 12px 15px rgba(0,0,0,.15)",
                transition: "0.2s",
                opacity: showDivOnScroll ? 1 : 0,
                background: "#F8FAFC",
                padding: "10px",
                position: "fixed",
                margin: "0px 8px",
                top: 68,
                right: 0,
                width: "100%",
                zIndex: 9,
              }}
            >
              {categories.map((ele, i) => {
                return (
                  <Link to={"/product"} key={i}>
                    <Stack
                      flexDirection={"row"}
                      gap={3}
                      sx={{ overflowX: "auto" }}
                      justifyContent={"center"}
                    >
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        gap={1}
                      >
                        <p
                          style={{ textWrap: "nowrap" }}
                          className=" px-1 text-gray-600 text-[17px]"
                        >
                          {ele}
                        </p>
                      </Stack>
                    </Stack>
                  </Link>
                );
              })}
            </div>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default Header