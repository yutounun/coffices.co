import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import QueryClientProviderComponent from "@/contexts/QueryClientProviderComponent";
import GoogleAnalytics from "#/(login)/_GoogleAnalytics";
import GoogleConcent from "@/components/ui/GoogleConcent";

type LayoutProps = {
  children: ReactNode;
};

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffices.",
  description: "Find your perfect remote work cafe",
};

export default function RootLayout({ children }: LayoutProps) {
  // const src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`;

  return (
    <html lang="en">
      <head>
        {/* <script async src={src} crossOrigin="anonymous"></script> */}
      </head>
      <body className={notojp.className}>
        {/* <GoogleAnalytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        /> */}
        <QueryClientProviderComponent>{children}</QueryClientProviderComponent>
        {/* <GoogleConcent /> */}
      </body>
    </html>
  );
}
