import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Stack } from "../../node_modules/@mui/material/index";
import "./globals.css";
import Sidebar from "./_commons/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffices.co",
  description: "Coffee shops for nomad workers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Stack direction="row">
          <Sidebar />
          <Box sx={{ ml: "24rem", mt: "60px" }}>{children}</Box>
        </Stack>
      </body>
    </html>
  );
}
