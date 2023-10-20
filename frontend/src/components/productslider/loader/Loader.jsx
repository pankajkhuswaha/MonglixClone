import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
const Loader = () => {
  return (
    <>
      <Skeleton variant="rectangular" width="100%" height={118} />
      <Box sx={{ pt: 0.5 }}>
        <Skeleton width="70%" />
        <Skeleton width="50%" />
        <Skeleton width="70%" />
        <Skeleton width="100%" />
        <Skeleton width="70%" />
      </Box>
    </>
  );
};

export default Loader;
