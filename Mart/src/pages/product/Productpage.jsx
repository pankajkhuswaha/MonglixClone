import React from "react";
import { Stack } from "@mui/material";
import { ProductSidebar } from "../../components/Index";
const Productpage = () => {
  return (
    <>
      <Stack
        display={"flex"}
        p={2}
        sx={{ background: "#F3F4F6" }}
        flexDirection={"row"}
      >
        <Stack flex={2}>
          <ProductSidebar />
        </Stack>
        <Stack flex={8}>hii its 8</Stack>
      </Stack>
    </>
  );
};

export default Productpage;
