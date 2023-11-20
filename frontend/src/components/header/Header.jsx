import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, Badge } from "@mui/material";
import TopDrawer from "../bottomdrawer/TopDrawer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { SearchComponent, BtmDrawer } from "../Index";
import { handleSeeAllClick } from "../../layout/ProductLayout";
import { SideFilter } from "../SideFilter/SideFilter";
import { SideFilter2 } from "../SideFilter/SideFilter2";
const Header = () => {
  // const [icc, setIcc] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        background: site.primarybg,
        boxShadow: "0 2px 15px rgba(0,0,0,.15)",
        width: "100%",
        padding: "8px",
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
                    mixBlendMode: "darken",
                  }}
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
            <Stack display={{ xs: "none ", md: "block" }}>
              <SearchComponent />
            </Stack>

            <Stack
              flexDirection={"row"}
              gap={{ xs: 2, md: 4 }}
              alignItems={"center"}
            >
              <div className="flex gap-2 md:hidden">
                <BtmDrawer />
                <TopDrawer />
              </div>
              <div className="p-2  md:block hidden gap-2 items-center rounded-lg">
                <p className=" text-white">Customer Services</p>
                <p className=" text-white text-bold text-xl">(800) 060-0730</p>
              </div>
              {/* {users ? (
                <Link to={"/checkout"}>
                  <Badge badgeContent={CartCount} color="primary">
                    <ShoppingBagOutlinedIcon />
                  </Badge>
                </Link>
              ) : (
                <Link to="/login">
                  <Badge badgeContent={CartCount} color="primary">
                    <ShoppingBagOutlinedIcon  style={{fontSize:'36px',color:site.primarybg}} />
                  </Badge>
                </Link>
              )} */}
              {/* {currentuser ? (
                <Link className="hidden md:block" to={"/users"}>
                  <AccountCircleIcon />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <div className="flex flex-row">
                  <PersonOutlineIcon className="text-blue-700" style={{fontSize:'46px',}}/>
                  <div className="font-bold ">
                    <p className="text-blue-700"> Login  </p>
                    <p className="relative text-blue-700 bottom-1">Register</p>
                  </div>
                  </div>
                 
                </Link>
                
              )} */}
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
                opacity: showDivOnScroll ? 1 : 0,

                boxShadow: "0 12px 15px rgba(0,0,0,.15)",
                transition: "0.2s",

                background: site.primarybg,
                padding: "10px",
                position: "fixed",
                margin: "0px 8px",
                top: 89,
                right: 0,
                width: "100%",
                zIndex: 9,
              }}
            >
              <SideFilter2/>
              <div className="flex gap-8">
                <Link to={"/"}>
                  <p className="text-white">Home</p>
                </Link>
                <Link to={"/"}>
                  <p className="text-white">About</p>
                </Link>
                <Link to={"/"}>
                  <p className="text-white">Contact Us</p>
                </Link>
                <Link to={"/"}>
                  <p className="text-white"> Store</p>
                </Link>
              </div>
              {users ? (
                <Link to={"/checkout"}>
                  <Badge badgeContent={CartCount} color="primary">
                    <ShoppingBagOutlinedIcon className="text-white" />
                  </Badge>
                </Link>
              ) : (
                <Link to="/login">
                  <Badge badgeContent={CartCount} color="primary">
                    <ShoppingBagOutlinedIcon className="text-white" style={{ fontSize: "26px" }} />
                  </Badge>
                </Link>
              )}
              {currentuser ? (
                <Link className="hidden md:block" to={"/users"}>
                  <AccountCircleIcon className="text-white" />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <div className="flex flex-row">
                    <PersonOutlineIcon
                      className="text-white"
                      style={{ fontSize: "28px" }}
                    />
                  </div>
                </Link>
              )}
              
              {/* {categories.map((ele, i) => {
                return (
                  <Stack
                    key={i}
                    flexDirection={"row"}
                    gap={3}
                    sx={{ overflowX: "auto" }}
                    justifyContent={"center"}
                  >
                    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                      <p
                        onClick={() =>
                          handleSeeAllClick(dispatch, navigate, ele)
                        }
                        style={{ textWrap: "nowrap" }}
                        className=" cursor-pointer  px-1 text-gray-600 text-[17px]"
                      >
                        {ele}
                      </p>
                    </Stack>
                  </Stack>
                );
              })} */}
            </div>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default Header;
