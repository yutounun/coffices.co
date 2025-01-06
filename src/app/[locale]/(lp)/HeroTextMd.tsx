import { Stack, Typography } from "@mui/material";

export function HeroTextMd({ }) {
  return (
    <>
      <Stack direction="column" gap={1} alignItems="center" sx={{
        display: {
          xs: "none",
          md: "flex"
        }
      }}>
        <Typography variant="displayLg">Find the Best Cafe for Work</Typography>
        <Stack direction="row" gap={1.4}>
          <Typography variant="displayLg" sx={{
            display: "inline-block"
          }}>
            with the Power of
          </Typography>
          <Typography variant="displayLg" color="secondary.500" fontWeight={600} sx={{
            display: "inline-block"
          }}>
            AI
          </Typography>
        </Stack>
      </Stack>

      <Typography variant="displaySm" color="neutral.900" sx={{
        display: {
          xs: "none",
          md: "flex"
        }
      }}>
        Find work-friendly cafe by analyzing reviews with AI.
      </Typography>
    </>)
}
