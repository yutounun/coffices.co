"use client";
import React from "react";
import { Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import useTranslate from "@/hooks/useTranslate";
import Image from "next/image";
import { BorderColor } from "@mui/icons-material";

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
  const { t } = useTranslate();

  return (
    <>
      <Button
        onClick={() => signIn(signInUrl, { callbackUrl: "/en/cafe/list" })}
        startIcon={
          <Image src={iconUrl} alt={`${text} icon`} width={24} height={24} />
        }
        sx={LoginButtonStyle}
      >
        <Typography variant="body1" sx={{ color: "black", fontWeight: 500 }}>
          {/* {(t ? " " + t.home.login : "") + text} */}
          {text + (t ? " " + t.home.login : "")}
        </Typography>
      </Button>
    </>
  );
};

export default LoginButton;
