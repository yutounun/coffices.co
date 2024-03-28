import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import QueryClientProviderComponent from "../contexts/QueryClientProviderComponent";
import GoogleAnalytics from "./(routes)/(NoHeader)/_GoogleAnalytics";
import GoogleConcent from "_commons/GoogleConcent";

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
  const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.client}`;

  return (
    <html lang="en">
      <head>
        <script async src={src} crossOrigin="anonymous"></script>
      </head>
      <body style={{ backgroundColor: "#F7F1E5" }} className={notojp.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} />
        <QueryClientProviderComponent>{children}</QueryClientProviderComponent>
        <GoogleConcent />
      </body>
    </html>
  );
}
