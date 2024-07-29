"use client";
import React from "react";
import { Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import useTranslate from "_custom/useTranslate";
import Image from "next/image";

type LoginButtonProps = {
  text: string;
  signInUrl: string;
  iconUrl: string;
};

const LoginButtonStyle = {
  backgroundColor: "white",
  width: "60%",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  borderRadius: "4",
};

const LoginButton = ({ text, signInUrl, iconUrl }: LoginButtonProps) => {
  const { t } = useTranslate();

  return (
    <Button
      onClick={() => signIn(signInUrl, { callbackUrl: "/cafe/list" })}
      startIcon={
        <Image src={iconUrl} alt={`${text} icon`} width={24} height={24} />
      }
      sx={LoginButtonStyle}
    >
      <Typography variant="body1">{text + " " + t?.home.login}</Typography>
    </Button>
  );
};

export default LoginButton;
