import { Box } from "@mui/material";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Box sx={{ mt: 16, mb: 6 }}>{children}</Box>;
}
