"use client";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const t = useTranslations("notFound");
  const router = useRouter();

  const handleGoBack = async () => {
    await router.push("/en/cafe/list");
  };

  return (
    <Button onClick={handleGoBack}>
      <Typography>{t("goBack")}</Typography>
    </Button>
  );
};

export default GoBack;
