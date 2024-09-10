"use client";
import React, { useEffect, useState } from "react";
import { Select, MenuItem, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/navigation";

const languages = [
  { code: "en", label: "English", img: "/flags/uk.jpg" },
  { code: "ja", label: "日本語", img: "/flags/japan.png" },
];

const CustomSelect = styled(Select)({
  width: 70, // Keep the button small and round
  borderRadius: 30,
  height: 38,
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
  const [language, setLanguage] = useState<string>("en");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // URLのパスから言語コードを取得
    const pathLanguage = window.location.pathname.split("/")[1];
    if (pathLanguage === "ja" || pathLanguage === "en") {
      setLanguage(pathLanguage);
    }
  }, []);

  const handleChange = (event: any) => {
    const selectedLang = event.target.value;
    setLanguage(selectedLang);

    // URLの言語部分を更新して遷移
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|ja)/, `/${selectedLang}`);
    router.push(newPath);

    if (onClose) onClose();
  };

  return (
    <>
      <CustomSelect
        size="small"
        value={language}
        onChange={handleChange}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        MenuProps={{
          PaperProps: {
            style: {
              marginTop: "10px", // Adjust this value to move the dropdown lower
            },
          },
        }}
        renderValue={(selected) => (
          // This is the rendering logic for the closed select button
          <Box display="flex" alignItems="center" gap="10px">
            <Image
              src={languages.find((lang) => lang.code === selected)?.img || ""}
              alt={
                languages.find((lang) => lang.code === selected)?.label || ""
              }
              width={24}
              height={20}
            />
          </Box>
        )}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            <MenuItemContent>
              <Image src={lang.img} alt={lang.label} width={24} height={20} />
              <Typography variant="body1">{lang.label}</Typography>
            </MenuItemContent>
          </MenuItem>
        ))}
      </CustomSelect>
    </>
  );
};

export default LanguageSelect;
