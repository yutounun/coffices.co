import React from "react";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

type LoginButtonProps = {
  text: string;
  iconComponent: React.ReactNode;
  signInUrl: string;
  isMobile?: boolean;
};

const mobileStyle = {
  backgroundColor: "#EEE4CD",
  color: "black",
  width: "65%",
  borderRadius: "50px",
  mx: "auto",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#EEE4CD",
  },
};

const pcStyle = {
  backgroundColor: "#EEE4CD",
  color: "black",
  width: "65%",
  borderRadius: "50px",
  mx: "auto",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#D1BBA7",
  },
};

const LoginButton = ({
  text,
  iconComponent,
  signInUrl,
  isMobile,
}: LoginButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={() => signIn(signInUrl, { callbackUrl: "/cafe/list" })}
      sx={isMobile ? mobileStyle : pcStyle}
      startIcon={iconComponent}
    >
      {isMobile ? text : text + "でログイン"}
    </Button>
  );
};

export default LoginButton;
