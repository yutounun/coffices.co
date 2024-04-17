"use client";
import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import useLangStore from "../../../store/lang";

const NoHeaderLayout = ({ children }: { children: React.ReactNode }) => {
  const { lang, changeToJp, changeToEng } = useLangStore();
  const [isLangReady, setIsLangReady] = useState(false);
  useEffect(() => {
    changeToJp();
  }, []);

  useEffect(() => {
    if (lang) {
      setIsLangReady(true);
    }
  }, [lang]);

  if (!isLangReady) {
    return null;
  }

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
