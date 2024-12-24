import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Box } from "@mui/material";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import Footer from "./(lp)/Footer";
import Reviews from "./(lp)/Reviews";
import Features from "./(lp)/Features";
import Hero from "./(lp)/Hero";

export default function Home() {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "home")}>
      <Box
        sx={{
          background:
            "linear-gradient(to right bottom, #B7FFA6 20%, #FCFEF3 50%)",
        }}
      >
        <ResponsiveAppBar />

        <Hero />

        <Features />

        <Reviews />

        <Footer />
      </Box>
    </NextIntlClientProvider>
  );
}
