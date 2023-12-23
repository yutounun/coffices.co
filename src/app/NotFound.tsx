import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const NotFound = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
