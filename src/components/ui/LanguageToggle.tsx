"use client";
import { useEffect } from "react";
import useLangStore from "@/store/lang";
import { Avatar } from "@mui/material";

const LanguageToggle = () => {
  const { lang, changeToJp, changeToEng } = useLangStore();

  useEffect(() => {
    changeToJp();
  }, [changeToJp]);

  return (
    <Avatar
      src={lang === "eng" ? "/flags/japan.png" : "/flags/england.png"}
      alt="flag"
      sx={{
        position: "fixed",
        left: "140px",
        top: "10px",
        width: 40,
        height: 40,
        cursor: "pointer",
      }}
      onClick={lang === "eng" ? changeToJp : changeToEng}
    />
  );
};

export default LanguageToggle;
