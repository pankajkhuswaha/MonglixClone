import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

export default function LoadButele() {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <div>
      <Box
        sx={{
          "& > button": {
            mt: 2,
            fontSize: "16px",
            fontWeight: "bold",
            width: "100%",
            p: "10px",
            backgroundColor: "#3D9BFF",
          },
        }}
      >
              <LoadingButton
                  type="submit"
          size="small"
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Confirm Order</span>
        </LoadingButton>
      </Box>
    </div>
  );
}
