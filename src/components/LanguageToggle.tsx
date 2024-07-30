"use client";
import { useEffect } from "react";
import useLangStore from "@/store/lang";
import Image from "next/image";

const LanguageToggle = ({}: {}) => {
  const { lang, changeToJp, changeToEng } = useLangStore();

  useEffect(() => {
    changeToJp();
  }, [changeToJp]);

  return (
    <Image
      src={lang === "eng" ? "/flags/japan.png" : "/flags/england.png"}
      style={{ position: "fixed", left: "140px", top: "10px" }}
      alt="flag"
      height="30"
      width="40"
      onClick={lang === "eng" ? changeToJp : changeToEng}
    />
  );
};

export default LanguageToggle;
