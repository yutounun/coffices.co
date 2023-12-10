"use client";

import Sidebar from "_commons/Sidebar";
import { Box, Stack } from "../../../../node_modules/@mui/material/index";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();
  return (
    <Stack direction="row">
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ ml: "4rem", mt: "60px" }}>{children}</Box>;
      </Box>
    </Stack>
  );
}
