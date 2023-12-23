"use client";
import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import CoffeeImage from "_commons/CoffeeImage";
import { NextImage } from "_commons/NextImage";

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
            py: "2em",
            mt: 20,
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
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontFamily: "sans-serif",
              height: "3em",
              zIndex: 10,
              color: "white",
              display: "flex",
              justifyContent: "center",
              mb: 3,
            }}
          >
            Welcome Back
          </Typography>
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
            T
          </Stack>
        </Stack>
      ) : (
        <Stack
          direction="row"
          sx={{ height: "100vh", backgroundColor: "#F7F1E5" }}
        >
          <Stack
            sx={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
          >
            <NextImage src="/nomad.jpg" alt="coffee-beans" />
          </Stack>
          <Stack
            sx={{
              width: "50%",
              height: "100%",
              borderRadius: "0 20px 20px 0",
              pt: 26,
            }}
            spacing={10}
          >
            <Typography
              color="#6B4E31"
              variant="h3"
              sx={{
                textAlign: "center",
                height: "7%",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Welcome Back!!
            </Typography>
            <Stack
              spacing={6}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                variant="contained"
                onClick={() => signIn("google", { callbackUrl: "/cafe/list" })}
                sx={{
                  width: "45%",
                  borderRadius: "50px",
                  mx: "auto",
                  fontWeight: "bold",
                  backgroundColor: "#EEE4CD",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#D1BBA7",
                  },
                }}
                startIcon={<GoogleIcon />}
              >
                Google
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={() =>
                  signIn("facebook", { callbackUrl: "/cafe/list" })
                }
                sx={{
                  width: "45%",
                  borderRadius: "50px",
                  mx: "auto",
                  fontWeight: "bold",
                  backgroundColor: "#EEE4CD",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#D1BBA7",
                  },
                }}
                startIcon={<FacebookIcon />}
              >
                FaceBook
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={() => signIn("github", { callbackUrl: "/cafe/list" })}
                sx={{
                  width: "45%",
                  borderRadius: "50px",
                  backgroundColor: "#EEE4CD",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#D1BBA7",
                  },
                }}
                startIcon={<GitHubIcon />}
              >
                Github
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={() => signIn("line", { callbackUrl: "/cafe/list" })}
                sx={{
                  width: "45%",
                  borderRadius: "50px",
                  mx: "auto",
                  backgroundColor: "#EEE4CD",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#D1BBA7",
                  },
                }}
                startIcon={<WhatsAppIcon />}
              >
                LINE
              </Button>
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
}
