import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Stack } from "@mui/material";
import LoginContent from "#/[locale]/(login)/LoginContent";
import LoginImage from "#/[locale]/(login)/LoginImage";
import { mobile } from "@/utils/const";

export default function Home() {
  const loginStyles = {
    height: "100vh",
    background: "white",
    justifyContent: "center",
    overflow: "hidden",
    px: { xs: mobile.space.aroundX, md: 10 },
  };
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "home")}>
      <Stack direction="row" sx={loginStyles}>
        <LoginContent />
        <LoginImage />
      </Stack>
    </NextIntlClientProvider>
  );
}
