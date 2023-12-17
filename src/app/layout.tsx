import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import { NextAuthProvider } from "../contexts/SessionProviderContext";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
type LayoutProps = {
  children: ReactNode;
};

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffices.co",
  description: "Coffee shops for nomad workers",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <NextAuthProvider>
      <ThemeProvider theme={theme}>
        <html lang="en">
          <body className={notojp.className}>{children}</body>
        </html>
      </ThemeProvider>
    </NextAuthProvider>
  );
}
