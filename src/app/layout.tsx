import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import { NextAuthProvider } from "../contexts/SessionProviderContext";

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
      <html lang="en">
        <body className={notojp.className}>{children}</body>
      </html>
    </NextAuthProvider>
  );
}
