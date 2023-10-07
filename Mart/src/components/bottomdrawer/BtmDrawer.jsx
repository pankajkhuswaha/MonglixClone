import * as React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Stack } from "@mui/material";

export default function BtmDrawer() {
  const site = useSelector((st) => st.site.data);
  const users = useSelector((state) => state.auth.user?.user);
  const currentuser = users?.name;
  const data = useSelector((state) => state.products.products);
  const categories = ["All", ...new Set(data.map((item) => item.category))];

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        className=" "
        style={{
          overflowX: "auto",
          display: "flex",

          flexDirection: "column",
          marginRight: "12px",
          gap: "24px",
          padding: "10px",
          alignItems: "flex-start",
        }}
      >
        <hr />
        <h1 className="text-lg font-bold  ">All Categories</h1>

        {categories.map((ele, i) => {
          return (
            <Link to={"/product"} key={i}>
              <Stack flexDirection={"row"} gap={3} justifyContent={"center"}>
                <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
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
        <hr className="bg-gray-500 w-full" />

        <Link to={"/bulk"} className=" px-1 text-gray-600 text-[17px]">
          Bulk Order{" "}
        </Link>

        {currentuser ? (
          <Link to={"/users"}>
            <p className=" px-1  text-gray-600 text-[17px]"> Account</p>
          </Link>
        ) : (
          <Link to={"/login"}>
            <p className=" px-1 text-gray-600 text-[17px]">Login</p>
          </Link>
        )}
        <hr />
      </div>
    </Box>
  );

  return (
    <div>
      {["bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenIcon />
          </button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
