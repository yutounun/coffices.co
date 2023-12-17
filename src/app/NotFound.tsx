import { Stack, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Stack
      direction="row"
      sx={{ ml: "4em", alignItems: "center", width: "100%", height: "10em" }}
    >
      <Typography variant="h6" sx={{ color: "#A9A9A9" }}>
        🙅‍♂️ Unfortunately not found. Please post a new café to improve this
        service experience.
      </Typography>
    </Stack>
  );
};

export default NotFound;
