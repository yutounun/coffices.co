import type { Metadata } from "next";
import "./globals.css";
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
      <body className={notojp.className}>{children}</body>
    </html>
  );
}
