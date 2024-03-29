import { Stack, Typography } from "@mui/material";
import React from "react";
import useMobile from "_custom/useMobile";

const NotFound = () => {
  const { isMobile } = useMobile();
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "90%", md: "100%" },
        height: "10em",
      }}
    >
      <Typography variant={isMobile ? "h6" : "h4"} sx={{ color: "#A9A9A9" }}>
        🙅‍♂️ Unfortunately not found. Please post a new café to improve this
        service experience.
      </Typography>
    </Stack>
  );
};

export default NotFound;
