"use client";
import { Box, Stack, Typography } from "@mui/material";
import LoginButton from "./LoginButton";
import useTranslate from "_custom/useTranslate";
import useLangStore from "../../../store/lang";
import { useEffect } from "react";

// アイコンとURLの情報をまとめる
const loginProviders = [
  { text: "Google", iconUrl: "/loginIcon/google.svg", signInUrl: "google" },
  {
    text: "FaceBook",
    iconUrl: "/loginIcon/facebook.svg",
    signInUrl: "facebook",
  },
  { text: "GitHub", iconUrl: "/loginIcon/github.svg", signInUrl: "github" },
  { text: "LINE", iconUrl: "/loginIcon/line.svg", signInUrl: "line" },
];

export default function Home() {
  const { t } = useTranslate();
  const { changeToJp } = useLangStore();

  useEffect(() => {
    changeToJp();
  }, [changeToJp]);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "custom.lightGray",
      }}
    >
      <Stack sx={{ py: "5%", width: "40%", justifyContent: "center" }}>
        <Typography variant="h1">{t?.home.title}</Typography>
        <Typography variant="body1" sx={{ my: 0.5 }}>
          {t?.home?.subtitle}
        </Typography>

        {/* Login Buttons */}
        <Stack spacing={3} sx={{ my: 8 }}>
          {loginProviders.map((provider) => (
            <LoginButton
              key={provider.text}
              text={provider.text}
              iconUrl={provider.iconUrl}
              signInUrl={provider.signInUrl}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
