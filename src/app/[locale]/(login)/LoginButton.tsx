"use client";
import React from "react";
import { Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type LoginButtonProps = {
  text: string;
  signInUrl: string;
  iconUrl: string;
};

const LoginButtonStyle = {
  backgroundColor: "white",
  border: "2px solid #D3D3D3",
  width: { xs: "100%", md: "80%" },
  "&:hover": {
    backgroundColor: "custom.hoveredWhite",
  },
  borderRadius: "10px",
  textTransform: "none",
};

const LoginButton = ({ text, signInUrl, iconUrl }: LoginButtonProps) => {
  const t = useTranslations("home");

  const handleSignIn = () => {
    const currentPath = window.location.pathname;
    const pathLanguage = currentPath.split("/")[1]; // get [locale]
    const callbackUrl = `/${pathLanguage}/cafe/list`;

    signIn(signInUrl, { callbackUrl });
  };

  return (
    <>
      <Button
        onClick={handleSignIn}
        startIcon={
          <Image src={iconUrl} alt={`${text} icon`} width={24} height={24} />
        }
        sx={LoginButtonStyle}
      >
        <Typography variant="body1" sx={{ color: "black", fontWeight: 500 }}>
          {text + (" " + t("login"))}
        </Typography>
      </Button>
    </>
  );
};

export default LoginButton;
