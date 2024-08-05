"use client";
import React, { useState } from "react";
import { Select, MenuItem, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import useLangStore from "@/store/lang";
import Image from "next/image";

const languages = [
  { code: "eng", label: "English", img: "/flags/england.png" },
  { code: "ja", label: "日本語", img: "/flags/japan.png" },
];

const CustomSelect = styled(Select)({
  width: "200px",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#D3D3D3",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#aaa",
  },
  "& .MuiSvgIcon-root": {
    color: "#555",
  },
});

const MenuItemContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const LanguageSelect = ({ onClose }: { onClose?: () => void }) => {
  const { lang, changeToJp, changeToEng } = useLangStore();
  const [language, setLanguage] = useState(lang);

  const handleChange = (event: any) => {
    const selectedLang = event.target.value;
    setLanguage(selectedLang);
    if (selectedLang === "ja") {
      changeToJp();
    } else if (selectedLang === "eng") {
      changeToEng();
    }
    if (onClose) onClose();
  };

  return (
    <CustomSelect size="small" value={language} onChange={handleChange} sx={{}}>
      {languages.map((lang) => (
        <MenuItem key={lang.code} value={lang.code}>
          <MenuItemContent>
            <Image src={lang.img} alt={lang.label} width={24} height={20} />
            <Typography>{lang.label}</Typography>
          </MenuItemContent>
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default LanguageSelect;
