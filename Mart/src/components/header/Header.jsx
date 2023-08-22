import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { Badge } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import { SearchComponent, BtmDrawer } from "../Index";

const Header = () => {
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
        sx={{ backgroundColor: "white" }}
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
            <Badge badgeContent={1} color="primary">
              <LocalMallIcon color="green" />
            </Badge>
            <AccountBoxIcon />
            <Stack display={{ sx: "block", md: "none" }}>
              <BtmDrawer />
            </Stack>
          </Stack>
        </Stack>

        <div
          style={{
            boxShadow: "0 12px 15px rgba(0,0,0,.15)",
            transition: "0.2s",
            opacity: showDivOnScroll ? 1 : 0,
            backgroundColor: "white",
            padding: "20px",
            position: "fixed",
            top: 78,
            right: 0,
            width: "100%",

            zIndex: 9,
          }}
        >
          Product Category
        </div>
      </Stack>
    </>
  );
};

export default Header;
