import type { Metadata } from "next";
import { Box, Stack } from "../../node_modules/@mui/material/index";
import "./globals.css";
import Sidebar from "./_commons/Sidebar";
import { Noto_Sans_JP } from "next/font/google";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={notojp.className}>
        <Stack direction="row">
          <Sidebar />
          <Box sx={{ width: "100%" }}>{children}</Box>
        </Stack>
      </body>
    </html>
  );
}
