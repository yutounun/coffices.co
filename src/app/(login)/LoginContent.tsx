"use client";
import { Stack, Typography } from "@mui/material";
import LoginButton from "./LoginButton";
import { loginProviders } from "@/data/buttons";
import useTranslate from "@/hooks/useTranslate";

const loginContentStyle = {
  py: "5%",
  width: "50%",
  height: "100%",
  justifyContent: "center",
};

const LoginContent = () => {
  const { t } = useTranslate();

  return (
    <Stack sx={loginContentStyle}>
      <Typography variant="h1">{t?.home.title}</Typography>
      <Typography variant="body1">{t?.home.subtitle}</Typography>

      <Stack spacing={3} sx={{ my: 8, width: "50%" }}>
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
  );
};

export default LoginContent;
