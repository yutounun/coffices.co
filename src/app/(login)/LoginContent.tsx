"use client";
import { Stack, Typography } from "@mui/material";
import LoginButton from "./LoginButton";
import { loginProviders } from "@/data/buttons";
import useTranslate from "@/hooks/useTranslate";

const loginContentStyle = {
  py: "5%",
  width: { xs: "100%", md: "50%" },
  height: "100%",
  justifyContent: "center",
  pl: 15,
};

const LoginContent = () => {
  const { t } = useTranslate();

  return (
    <Stack sx={loginContentStyle}>
      <Typography variant="h2" sx={{ fontWeight: "bold", letterSpacing: 1.2 }}>
        {t?.home.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "custom.darkGray", fontWeight: "medium", mt: 0.3 }}
      >
        {t?.home.subtitle}
      </Typography>

      <Stack spacing={3} sx={{ my: 5, width: { xs: "100%", md: "50%" } }}>
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
