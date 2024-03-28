"use client";
import {
  Button,
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import UndrawBarista from "../../../../public/undraw_barista.svg";
import UndrawDigitalNomad from "../../../../public/undraw_digital_nomad.svg";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NextImage } from "_commons/NextImage";
import LoginButton from "./LoginButton";
import Image from "../../../../node_modules/next/image";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <Stack
          sx={{
            width: "100%",
            height: "100%", // Changed from 100vh to 100%
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
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                zIndex: 10,
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              ノマド・リモートワーカー
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "sans-serif",
                zIndex: 10,
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
            >
              のための
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                zIndex: 10,
                color: "white",
                display: "flex",
                justifyContent: "center",
                mb: 3,
              }}
            >
              情報交換プラットフォーム
            </Typography>
          </Stack>
          <Stack
            spacing={3}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              onClick={() => signIn("google", { callbackUrl: "/cafe/list" })}
              sx={{
                backgroundColor: "#EEE4CD",
                "&:hover": {
                  backgroundColor: "#EEE4CD",
                },
                color: "black",
                width: "65%",
                borderRadius: "50px",
                mx: "auto",
                fontWeight: "bold",
              }}
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button
              variant="contained"
              onClick={() => signIn("facebook", { callbackUrl: "/cafe/list" })}
              sx={{
                backgroundColor: "#EEE4CD",
                "&:hover": {
                  backgroundColor: "#EEE4CD",
                },
                color: "black",
                borderRadius: "50px",
                width: "65%",
                mx: "auto",
                fontWeight: "bold",
              }}
              startIcon={<FacebookIcon />}
            >
              FaceBook
            </Button>
            <Button
              variant="contained"
              onClick={() => signIn("github", { callbackUrl: "/cafe/list" })}
              sx={{
                backgroundColor: "#EEE4CD",
                "&:hover": {
                  backgroundColor: "#EEE4CD",
                },
                color: "black",
                width: "65%",
                borderRadius: "50px",
                mx: "auto",
                fontWeight: "bold",
              }}
              startIcon={<GitHubIcon />}
            >
              Github
            </Button>
            <Button
              variant="contained"
              onClick={() => signIn("line", { callbackUrl: "/cafe/list" })}
              sx={{
                backgroundColor: "#EEE4CD",
                "&:hover": {
                  backgroundColor: "#EEE4CD",
                },
                color: "black",
                width: "65%",
                borderRadius: "50px",
                mx: "auto",
                fontWeight: "bold",
              }}
              startIcon={<WhatsAppIcon />}
            >
              LINE
            </Button>
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
                  ノマドワーカー と リモートワーカー
                </Typography>
                <Typography variant="h4">のための</Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  情報交換プラットフォーム
                </Typography>
              </Stack>
            </Stack>
            <Stack sx={{ color: "#666666", textAlign: "center", mb: 8 }}>
              <Typography variant="h6" sx={{ my: 0.5 }}>
                一緒に心地よく仕事ができるカフェを探しませんか？？
              </Typography>
              <Typography variant="h6" sx={{ my: 0.5 }}>
                図書館だと静かすぎますよね〜
              </Typography>
              <Typography variant="h6" sx={{ my: 0.5 }}>
                在宅は飽きますよね〜
              </Typography>
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
