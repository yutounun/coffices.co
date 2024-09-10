import { useTranslations } from "next-intl";
import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
// import GoBack from "@/components/ui/GoBack";
import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("list");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        color: "#333",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "6rem", color: "#ff6f61", mb: 2 }}
      >
        {t("notFound.errorCode")}
      </Typography>
      <Typography variant="h5" component="p" sx={{ mb: 3 }}>
        {t("notFound.message")}
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Link href="/en/cafe/list">{t("notFound.goBack")}</Link>
      </Box>
    </Container>
  );
}
