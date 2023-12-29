import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { ReactNode } from "react";
import QueryClientProviderComponent from "../contexts/QueryClientProviderComponent";
import GoogleAnalytics from "./(NoHeader)/_GoogleAnalytics";
import GoogleConcent from "_commons/GoogleConcent";
import Script from "next/script";
import AdCode from "_commons/AdCode";

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
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1580241070744469"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <ins
          className="adsbygoogle"
          style={{ display: "inline-block", width: 728, height: 90 }}
          data-ad-client="ca-pub-1234567890123456"
          data-ad-slot={1234567890}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: "(window.adsbygoogle = window.adsbygoogle || []).push({});",
          }}
        />
      </head>
      <body style={{ backgroundColor: "#F7F1E5" }} className={notojp.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} />
        <QueryClientProviderComponent>{children}</QueryClientProviderComponent>
        {/* <AdCode /> */}
        <GoogleConcent />
      </body>
    </html>
  );
}
