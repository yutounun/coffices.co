"use client";
import {
  Button,
  Stack,
  Typography,
} from "../../node_modules/@mui/material/index";
import Image from "../../node_modules/next/image";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#88A9EF",
        }}
      >
        <Stack
          sx={{
            borderRadius: "20px",
            width: "50%",
            height: "50%",
          }}
          direction="row"
        >
          <Stack
            sx={{
              width: "55%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E6F0FF",
              borderRadius: "20px 0 0 20px",
            }}
          >
            {/* <NextImage src="/coffee.jpg" alt="image" /> */}
            {/* <Image src="/man.png" alt="image" width={300} height={600} /> */}
            <Image
              priority={true}
              src="/woman.png"
              alt="image"
              width={500}
              height={300}
            />
          </Stack>
          <Stack
            sx={{
              width: "45%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "0 20px 20px 0",
              py: "3em",
            }}
            spacing={4}
          >
            <Typography
              color="primary"
              variant="h4"
              sx={{ textAlign: "center", height: "7%", fontWeight: "bold" }}
            >
              Sign In
            </Typography>
            <Stack
              spacing={3}
              sx={{
                height: "70%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={() => signIn("google", { callbackUrl: "/cafe/list" })}
                sx={{ width: "45%", mx: "auto", fontWeight: "bold" }}
                startIcon={<GoogleIcon />}
              >
                Google
              </Button>
              <Button
                variant="contained"
                onClick={() =>
                  signIn("facebook", { callbackUrl: "/cafe/list" })
                }
                sx={{
                  width: "45%",
                  mx: "auto",
                  fontWeight: "bold",
                  backgroundColor: "#4867AA",
                }}
                startIcon={<FacebookIcon />}
              >
                FaceBook
              </Button>
              <Button
                variant="contained"
                onClick={() => signIn("github", { callbackUrl: "/cafe/list" })}
                sx={{
                  width: "45%",
                  mx: "auto",
                  fontWeight: "bold",
                  backgroundColor: "#1F2327",
                  "&:hover": { backgroundColor: "#1F2327" },
                }}
                startIcon={<GitHubIcon />}
              >
                Github
              </Button>
              <Button
                variant="contained"
                onClick={() => signIn("line", { callbackUrl: "/cafe/list" })}
                sx={{
                  width: "45%",
                  mx: "auto",
                  fontWeight: "bold",
                  backgroundColor: "#03B602",
                  "&:hover": { backgroundColor: "#03B602" },
                }}
                startIcon={<WhatsAppIcon />}
              >
                LINE
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
