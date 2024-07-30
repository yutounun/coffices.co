"use client";
import { useEffect } from "react";
import useLangStore from "@/store/lang";
import { Avatar } from "@mui/material";

const LanguageToggle = ({ sx }: { sx: Object }) => {
  const { lang, changeToJp, changeToEng } = useLangStore();

  useEffect(() => {
    changeToJp();
  }, [changeToJp]);

  return (
    <Avatar
      src={lang === "eng" ? "/flags/japan.png" : "/flags/england.png"}
      alt="flag"
      sx={{
        ...sx,
        left: "200px",
        top: "15px",
        width: 30,
        height: 30,
        cursor: "pointer",
      }}
      onClick={lang === "eng" ? changeToJp : changeToEng}
    />
  );
};

export default LanguageToggle;
