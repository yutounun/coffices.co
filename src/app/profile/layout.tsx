import Header from "_commons/Header";
import { Box, Stack } from "../../../node_modules/@mui/material/index";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack>
      <Header />
      <Box sx={{ width: "100%" }}>{children}</Box>
    </Stack>
  );
}
