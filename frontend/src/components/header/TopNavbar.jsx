import { useSelector } from "react-redux";
import { Stack } from "@mui/material";
import TopDrawer from "../bottomdrawer/TopDrawer";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";
import { SearchComponent, BtmDrawer } from "../Index";
import DropDownHeader from "./dropDown.jsx";
import useShowonSroll from "./useShowonSroll.js";

const TopNavbar = () => {
    const site = useSelector((st) => st.site.data);
    const visible = useShowonSroll();
    console.log(visible)
    return (
        <div
            className={`z-50 ${visible ? "sticky top-0" : ""}`}
            style={{ background: site.primarybg }}
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
                        {!visible ? (
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
                            <>
                                <div className="flex items-center gap-2 py-2">
                                    < Link to={'/'}>

                                        <FaHome style={{ fontSize: '28px', color: 'white' }} />
                                    </Link>
                                    <DropDownHeader />
                                </div>
                            </>
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
                                <a
                                    href="tel:7678536510"
                                    className=" text-white text-bold text-xl"
                                >
                                    +917678536510
                                </a>
                            </div>
                        </Stack>
                    </Stack>


                </Stack>
            </div>
        </div>
    );
};

export default TopNavbar;
