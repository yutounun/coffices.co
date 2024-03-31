"use client";
import { Box, Stack, Typography } from "@mui/material";
import UndrawBarista from "../../../../public/undraw_barista.svg";
import UndrawDigitalNomad from "../../../../public/undraw_digital_nomad.svg";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NextImage } from "_commons/NextImage";
import LoginButton from "./LoginButton";
import Image from "../../../../node_modules/next/image";
import useMobile from "_custom/useMobile";
import useTranslate from "_custom/useTranslate";
import useLangStore from "../../../store/lang";
import { useEffect } from "react";

const titleStyle = {
  fontFamily: "sans-serif",
  zIndex: 10,
  color: "white",
  display: "flex",
  justifyContent: "center",
};

const boldTitleStyle = {
  ...titleStyle,
  fontWeight: "bold",
};

export default function Home() {
  const { t } = useTranslate();
  const { changeToJp } = useLangStore();
  const { isMobile } = useMobile();
  useEffect(() => {
    changeToJp();
  }, []);
  return (
    <>
      {isMobile ? (
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
          spacing={4}
        >
          {/* Background Image */}
          <Stack
            sx={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
            }}
            direction="row"
          >
            <NextImage src="/coffee-shop.jpg" alt="coffee-beans" />
          </Stack>

          {/* Content */}
          <Stack
            sx={{
              py: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            spacing={2}
          >
            <Typography variant="h5" sx={boldTitleStyle}>
              {t && t.home.title[0]}
            </Typography>
            <Typography variant="h5" sx={titleStyle}>
              {t && t.home.title[1]}
            </Typography>
            <Typography variant="h5" sx={boldTitleStyle}>
              {t && t.home.title[2]}
            </Typography>
          </Stack>
          <Stack
            spacing={3}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LoginButton
              text="Google"
              iconComponent={<GoogleIcon />}
              signInUrl="google"
              isMobile
            />
            <LoginButton
              text="FaceBook"
              iconComponent={<FacebookIcon />}
              signInUrl="facebook"
              isMobile
            />
            <LoginButton
              text="GitHub"
              iconComponent={<GitHubIcon />}
              signInUrl="github"
              isMobile
            />
            <LoginButton
              text="LINE"
              iconComponent={<WhatsAppIcon />}
              signInUrl="line"
              isMobile
            />
          </Stack>
        </Stack>
      ) : (
        // PC
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#F7F1E5",
          }}
        >
          <Stack sx={{ justifyContent: "center" }}>
            <Image src={UndrawBarista} alt={""} width={300} height={300} />
          </Stack>

          {/* <GoogleAdSense
            client={process.env.GOOGLE_ADSENSE_CLIENT_ID ?? ""}
            slot={process.env.GOOGLE_ADSENSE_SLOT_ID ?? ""}
            style={{ display: "block" }}
          /> */}
          <Box sx={{ my: "5%" }}>
            <Stack
              sx={{
                width: "100%",
                pb: 10,
                mt: 4,
                textAlign: "center",
              }}
              spacing={3}
            >
              <Stack
                sx={{ textAlign: "center", justifyContent: "center" }}
                spacing={2}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {t && t.home.title[0]}
                </Typography>
                <Typography variant="h4">{t && t.home.title[1]}</Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {t && t.home.title[2]}
                </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ color: "#666666", textAlign: "center", mb: 8 }}>
              {t?.home?.subtitle.map((subtitle: string) => (
                <Typography key={subtitle} variant="h6" sx={{ my: 0.5 }}>
                  {subtitle}
                </Typography>
              ))}
            </Stack>
            <Stack
              spacing={4}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LoginButton
                text="Google"
                iconComponent={<GoogleIcon />}
                signInUrl="google"
              />
              <LoginButton
                text="FaceBook"
                iconComponent={<FacebookIcon />}
                signInUrl="facebook"
              />
              <LoginButton
                text="GitHub"
                iconComponent={<GitHubIcon />}
                signInUrl="github"
              />
              <LoginButton
                text="LINE"
                iconComponent={<WhatsAppIcon />}
                signInUrl="line"
              />
            </Stack>
          </Box>
          <Stack sx={{ justifyContent: "center" }}>
            <Image src={UndrawDigitalNomad} alt={""} width={400} height={400} />
          </Stack>
        </Stack>
      )}
    </>
  );
}
