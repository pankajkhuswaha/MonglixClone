import React from "react";
import { Stack } from "@mui/material";
import { toast } from "react-toastify";
import { Profile, Invoice, Order, Payment, Shipping, UserMain } from "./pages";
import { userRoutes, logout } from "./UserRoutes";
import { Link, Route, Routes } from "react-router-dom";
import LftDrawer from "../../components/bottomdrawer/LftDrawer";

export const UserSidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    toast.success("logout Successfull");
  };
  return (
    <>
      <Link to={"/users"}>
        <p className="text-[#212121] font-[700] text-[18px] pb-3">My Account</p>
      </Link>
      <hr />
      <div
        style={{ borderBottom: " 1px solid #ebebeb" }}
        className="mt-[25px] pb-2 "
      >
        <p className=" text-lg font-[600]">orders</p>
        {userRoutes.map((ele, idx) => {
          return (
            <Link to={ele.path} key={idx}>
              <div className="flex gap-2 m-2">
                <img src={ele.img} alt="" />
                <p>{ele.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div
        style={{ borderBottom: " 1px solid #ebebeb" }}
        className="mt-[25px] pb-2"
      >
        <p className=" text-lg font-[600]">Profile</p>
        {logout.map((ele, idx) => {
          return (
            <Link to={ele.path} key={idx}>
              <div className="flex gap-2 m-2">
                <img src={ele.img} alt="" />
                <p>{ele.name}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <div
        onClick={handleLogout}
        className=" cursor-pointer flex gap-2 p-2 mt-4"
      >
        <img
          src="	https://d3juy0zp6vqec8.cloudfront.net/images/logout.svg"
          alt=""
        />
        <p>Logout</p>
      </div>
    </>
  );
};

const UserDetails = () => {
  return (
    <>
      <Stack
        position={"absolute"}
        backgroundColor={"#fee5e5"}
        padding={"6px"}
        width={"9%"}
        display={{ xs: "block", md: "none" }}
      >
        <LftDrawer />
      </Stack>
      <Stack display={"flex"} flexDirection={"row"}>
        <Stack
          display={{ xs: "none", md: "block" }}
          flex={2}
          p={3}
          position={"sticky"}
          top={"19%"}
          height={"100vh"}
        >
          <UserSidebar />
        </Stack>

        <Stack flex={8} sx={{ backgroundColor: "white" }} p={3}>
          <Routes>
            <Route path="/" element={<UserMain />}></Route>
            <Route path="/orders" element={<Order />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
            <Route path="/invoice" element={<Invoice />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/Shipping-Address" element={<Shipping />}></Route>
          </Routes>
        </Stack>
      </Stack>
    </>
  );
};

export default UserDetails;
