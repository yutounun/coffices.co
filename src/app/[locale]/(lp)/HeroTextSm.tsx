import { Stack, Typography } from "@mui/material";
import React from "react";

function HeroTextSm() {
  return (
    <>
      <Stack sx={{
        alignItems: "center",
        display: {
          xs: "flex",
          md: "none"
        }
      }} gap={1}>
        <Typography variant="displayLg">Find Cafe for Work</Typography>
        <Typography variant="displayLg" sx={{
          textAlign: "center"
        }}>
          with AI
        </Typography>
      </Stack>

      <Typography variant="displaySm" color="neutral.900" sx={{
        display: {
          xs: "flex",
          md: "none"
        }
      }}>
        Analyzing cafe reviews with AI.
      </Typography>
    </>
  )

}
export default HeroTextSm;