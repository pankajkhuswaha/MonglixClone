import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import DropDownHeader from "./dropDown";
import useShowonSroll from "./useShowonSroll";

const SecondNavbar = () => {
    const cart = useSelector((state) => state.cart.carts);
    const site = useSelector((st) => st.site.data);
    const CartCount = cart.products?.length;
    const users = useSelector((state) => state.auth.user?.user);
    const currentuser = users?.name;
    const location = useLocation();
    const visible = useShowonSroll();

    return (
        <>
            <div className={`z-50 hidden md:block shadow pb-0 ${visible ? "" : "sticky top-0"}`}
                style={{ background: site.primarybg }}
            >
                {location.pathname === "/" && (
                    <div
                        className={`flex justify-between items-center w-full container py-3`}

                    >
                        <DropDownHeader />
                        <div className="flex gap-8 items-center">
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
                                        <ShoppingBagOutlinedIcon className="text-white" />
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
                                <Link className="hidden md:flex gap-2" to={"/users"}>
                                    <AccountCircleIcon className="text-white" />
                                    <p className="text-md text-white">User</p>
                                </Link>
                            ) : (
                                <Link to={"/login"}>
                                    <div className="flex gap-1 flex-row">
                                        <PersonOutlineIcon className="text-white" />
                                        <p className="text-white">Login & SignUp</p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}

export default SecondNavbar