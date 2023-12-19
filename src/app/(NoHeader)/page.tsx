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

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isMobile ? (
        <Stack
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "white",
            py: "2em",
            justifyContent: "center",
          }}
          spacing={3}
        >
          <Typography
            color="#6B4E31"
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            Sign In
          </Typography>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              priority={true}
              src="/woman.png"
              alt="image"
              width={260}
              height={200}
            />
          </Stack>
          <Stack
            spacing={3}
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => signIn("google", { callbackUrl: "/cafe/list" })}
              sx={{
                width: "45%",
                mx: "auto",
                fontWeight: "bold",
                backgroundColor: "#4284F3",
                "&:hover": {
                  backgroundColor: "#4284F3",
                },
              }}
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => signIn("facebook", { callbackUrl: "/cafe/list" })}
              sx={{
                width: "45%",
                mx: "auto",
                fontWeight: "bold",
                backgroundColor: "#4867AA",
                "&:hover": {
                  backgroundColor: "#4867AA",
                },
              }}
              startIcon={<FacebookIcon />}
            >
              FaceBook
            </Button>
            <Button
              size="small"
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
              size="small"
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
      ) : (
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: "primary.light",
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
                backgroundColor: "#6B4E31",
                borderRadius: "20px 0 0 20px",
              }}
            >
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
                color="#6B4E31"
                variant="h4"
                sx={{
                  textAlign: "center",
                  height: "7%",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
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
                  onClick={() =>
                    signIn("google", { callbackUrl: "/cafe/list" })
                  }
                  sx={{
                    width: "45%",
                    mx: "auto",
                    fontWeight: "bold",
                    backgroundColor: "#4284F3",
                    "&:hover": {
                      backgroundColor: "#4284F3",
                    },
                  }}
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
                    "&:hover": {
                      backgroundColor: "#4867AA",
                    },
                  }}
                  startIcon={<FacebookIcon />}
                >
                  FaceBook
                </Button>
                <Button
                  variant="contained"
                  onClick={() =>
                    signIn("github", { callbackUrl: "/cafe/list" })
                  }
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
      )}
    </>
  );
}
