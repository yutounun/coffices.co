import Sidebar from "_commons/Sidebar";
import { Box, Stack } from "../../../../node_modules/@mui/material/index";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack direction="row">
      <Sidebar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ ml: "4rem", mt: "60px" }}>{children}</Box>;
      </Box>
    </Stack>
  );
}
