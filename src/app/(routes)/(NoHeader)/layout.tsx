"use client";
import React from "react";
import { Button } from "@mui/material";
import useLangStore from "../../../store/lang";

const NoHeaderLayout = ({ children }: { children: React.ReactNode }) => {
  const { lang, changeToJp, changeToEng } = useLangStore();

  return (
    <>
      {lang === "jp" ? (
        <Button sx={{ position: "absolute" }} onClick={changeToEng}>
          English
        </Button>
      ) : (
        <Button sx={{ position: "absolute" }} onClick={changeToJp}>
          日本語
        </Button>
      )}
      {children}
    </>
  );
};

export default NoHeaderLayout;
