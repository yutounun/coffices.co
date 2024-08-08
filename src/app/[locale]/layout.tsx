import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { Stack } from "@mui/material";
import Image from "next/image";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Snackbar from "@/components/ui/Snackbar";
import QueryClientProviderComponent from "@/contexts/QueryClientProviderComponent";

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffices.",
  description: "Find your perfect remote work cafe",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={notojp.className}>
        <Stack
          sx={{
            position: "fixed",
            top: "2em",
            left: { xs: "1.5em", md: "4em" },
            gap: 5,
          }}
          direction="row"
        >
          <Image src={"/logo/orange.png"} alt="image" height="40" width="100" />
          <LanguageToggle />
        </Stack>
        <QueryClientProviderComponent>{children}</QueryClientProviderComponent>
        <Snackbar />
      </body>
    </html>
  );
}
