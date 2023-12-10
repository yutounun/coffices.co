"use client";
import { NextImage } from "_commons/NextImage";
import { Box, Stack, Typography } from "../../node_modules/@mui/material/index";
import Image from "../../node_modules/next/image";
import styles from "./page.module.css";

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
            width: "70%",
            height: "70%",
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
            {/* <NextImage src="/no-image.png" alt="image" /> */}
            {/* <Image src="/man.png" alt="image" width={300} height={600} /> */}
            <Image src="/woman.png" alt="image" width={800} height={600} />
          </Stack>
          <Stack
            sx={{
              width: "45%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "0 20px 20px 0",
              py: "3em",
            }}
          >
            <Typography
              color="primary"
              variant="h3"
              sx={{ textAlign: "center" }}
            >
              Login
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
