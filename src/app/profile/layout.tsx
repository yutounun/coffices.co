import Sidebar from "_commons/Sidebar";
import { Box, Stack } from "../../../node_modules/@mui/material/index";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack direction="row">
      <Sidebar />
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Stack>
  );
}
