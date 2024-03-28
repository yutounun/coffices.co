import React from "react";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

type LoginButtonProps = {
  text: string;
  iconComponent: React.ReactNode;
  signInUrl: string;
};

const LoginButton = ({ text, iconComponent, signInUrl }: LoginButtonProps) => {
  return (
    <Button
      size="large"
      variant="contained"
      onClick={() => signIn(signInUrl, { callbackUrl: "/cafe/list" })}
      sx={{
        width: "50%",
        borderRadius: "50px",
        mx: "auto",
        fontWeight: "bold",
        backgroundColor: "#EEE4CD",
        color: "black",
        "&:hover": {
          backgroundColor: "#D1BBA7",
        },
      }}
      startIcon={iconComponent}
    >
      {text}でログイン
    </Button>
  );
};

export default LoginButton;
