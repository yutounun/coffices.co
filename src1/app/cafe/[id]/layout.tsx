import { desktop, mobile } from "@/utils/const";
import { Box } from "@mui/material";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        mt: { xs: mobile.space.aroundY, md: desktop.space.aroundY },
        mb: 6,
      }}
    >
      {children}
    </Box>
  );
}
