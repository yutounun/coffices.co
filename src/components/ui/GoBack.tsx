"use client";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const t = useTranslations("notFound");
  const router = useRouter();

  const handleGoBack = async () => {
    // クエリパラメータを除去してURLを構築
    await router.push("/en/cafe/list?q=aa");
  };

  return (
    <Button onClick={handleGoBack}>
      <Typography>{t("goBack")}</Typography>
    </Button>
  );
};

export default GoBack;
