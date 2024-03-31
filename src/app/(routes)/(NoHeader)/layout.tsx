"use client";
import React from "react";
import { Button } from "@mui/material";
import useLangStore from "../../../store/lang";

const NoHeaderLayout = ({ children }: { children: React.ReactNode }) => {
  const { lang, changeToJp, changeToEng } = useLangStore();

  return (
    <>
      {lang === "jp" ? (
        <Button
          sx={{
            position: "absolute",
            zIndex: 10,
            color: { xs: "white", md: "black" },
          }}
          onClick={changeToEng}
        >
          English
        </Button>
      ) : (
        <Button
          sx={{
            position: "absolute",
            zIndex: 10,
            color: { xs: "white", md: "black" },
          }}
          onClick={changeToJp}
        >
          日本語
        </Button>
      )}
      {children}
    </>
  );
};

export default NoHeaderLayout;
