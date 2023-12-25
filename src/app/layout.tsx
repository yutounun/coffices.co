import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import QueryClientProviderComponent from "../contexts/QueryClientProviderComponent";

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
    <html lang="en">
      <body style={{ backgroundColor: "#F7F1E5" }} className={notojp.className}>
        <QueryClientProviderComponent>{children}</QueryClientProviderComponent>
      </body>
    </html>
  );
}
