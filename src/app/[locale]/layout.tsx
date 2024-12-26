import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ResponsiveAppBar";
import { Lato } from "next/font/google"; // Lato をインポート
import Snackbar from "@/components/ui/Snackbar";
import QueryClientProviderComponent from "@/contexts/QueryClientProviderComponent";
import { Box, CssBaseline } from "@mui/material";

// Lato フォント設定
const lato = Lato({
  weight: ["400", "700"],
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
      <body className={lato.className}>
        {" "}
        <QueryClientProviderComponent>
          <CssBaseline />
          <Header />
          <Box>{children}</Box>
        </QueryClientProviderComponent>
        <Snackbar />
      </body>
    </html>
  );
}
