import { useTranslations } from "next-intl";
import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Stack } from "@mui/material";
import LoginContent from "#/[locale]/(login)/LoginContent";
import LoginImage from "#/[locale]/(login)/LoginImage";
import { mobile } from "@/utils/const";

export default function Home() {
  const t = useTranslations("home");
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
        <h3>{t("title")}</h3>
        <LoginContent />
        <LoginImage />
      </Stack>
    </NextIntlClientProvider>
  );
}
