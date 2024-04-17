"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import UndrawBarista from "../../../../public/undraw_barista.svg";
import LoginButtonGroup from "./LoginButtonGroup";
import useTranslate from "_custom/useTranslate";
import useLangStore from "../../../store/lang";
import { useEffect } from "react";

const mobileImgStyle = {
  "@media (min-width: 600px)": {
    display: "none",
  },
  py: 3,
  alignItems: "center",
};
const boldTitleStyle = { fontWeight: "bold" };
const subtitleStyle = {
  color: "#666666",
  textAlign: "center",
  mb: 8,
  "@media (max-width: 600px)": {
    display: "none",
  },
};
const titleStyle = {
  width: "100%",
  mt: 4,
  textAlign: "center",
  "@media (min-width: 600px)": {
    pb: 10,
  },
};
const loginContainerStyle = {
  my: "5%",
  width: "40%",
  "@media (max-width: 600px)": {
    width: "90%",
  },
};

export default function Title() {
  const { t } = useTranslate();
  const { changeToJp } = useLangStore();
  useEffect(() => {
    changeToJp();
  }, []);
  return (
    <Box sx={loginContainerStyle}>
      <Stack sx={titleStyle} spacing={3}>
        <Stack
          sx={{ textAlign: "center", justifyContent: "center" }}
          spacing={2}
        >
          <Typography variant="h4" sx={boldTitleStyle}>
            {t && t.home.title[0]}
          </Typography>
          <Typography variant="h4">{t && t.home.title[1]}</Typography>
          <Typography variant="h4" sx={boldTitleStyle}>
            {t && t.home.title[2]}
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={mobileImgStyle}>
        <Image src={UndrawBarista} alt={""} width={200} height={200} />
      </Stack>
      <Stack sx={subtitleStyle}>
        {t?.home?.subtitle.map((subtitle: string) => (
          <Typography key={subtitle} variant="h6" sx={{ my: 0.5 }}>
            {subtitle}
          </Typography>
        ))}
      </Stack>
      <LoginButtonGroup />
    </Box>
  );
}
