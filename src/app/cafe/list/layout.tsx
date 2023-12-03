import { Box } from "../../../../node_modules/@mui/material/index";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={{ ml: "4rem", mt: "60px" }}>{children}</Box>;
}
