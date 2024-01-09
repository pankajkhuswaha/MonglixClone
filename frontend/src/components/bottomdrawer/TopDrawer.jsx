
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SearchIcon from "@mui/icons-material/Search";
import { SearchComponent } from "../Index";

export default function TopDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (event && event.currentTarget.tagName.toLowerCase() === "button") {
      setState({ ...state, [anchor]: open });
    }
  };

  const handleDrawerClose = () => {
    setState({ ...state, top: false });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
    >
      <div className="flex justify-center p-1">
        <SearchComponent closeDrawer={handleDrawerClose} />
      </div>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <SearchIcon />
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
