import React from "react";
import { Stack, Typography } from "../../../node_modules/@mui/material/index";

interface propTypes {
  children: React.ReactNode;
  title: string;
}
const SidebarRow = ({ children, title }: propTypes) => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        p: 2,
        borderRadius: 2,
        cursor: "pointer",
        ":hover": {
          fontWeight: "bold",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        },
      }}
      spacing={1}
    >
      {/* Icon */}
      {children}

      <Typography variant="h6">{title}</Typography>
    </Stack>
  );
};

export default SidebarRow;
