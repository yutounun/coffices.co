import { Box } from "@mui/material";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={{ mt: 16, px: 25 }}>{children}</Box>;
}
