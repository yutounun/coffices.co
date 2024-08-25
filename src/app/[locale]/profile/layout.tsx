import Header from "@/components/Header";
import { desktop, mobile } from "@/utils/const";
import { Box } from "@mui/material";

export default function CafeListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
