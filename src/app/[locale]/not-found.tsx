import { useTranslations } from "next-intl";
import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import GoBack from "@/components/ui/GoBack";
import { Container, Typography, Button, Box } from "@mui/material";

export default function NotFound() {
  const t = useTranslations("notFound");
  const messages = useMessages();

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        color: "#333",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "6rem", color: "#ff6f61", mb: 2 }}
      >
        {t("errorCode")}
      </Typography>
      <Typography variant="h5" component="p" sx={{ mb: 3 }}>
        {t("message")}
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <NextIntlClientProvider messages={pick(messages, "notFound")}>
          <GoBack />
        </NextIntlClientProvider>
      </Box>
    </Container>
  );
}
