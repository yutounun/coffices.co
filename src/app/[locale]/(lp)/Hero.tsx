import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Stack
      direction="column"
      sx={{
        minHeight: "60vh",
        pt: "20vh",
        gap: 3,
        pb: 10,
        alignItems: "center",
        width: "100%",
        background: "linear-gradient(to right bottom, #B7FFA6 0%, #FCFEF3 80%)",
      }}
    >
      <Stack direction="column" gap={1} alignItems="center">
        <Typography variant="displayLg">Find the Best Cafe for Work</Typography>
        <Stack direction="row" gap={1.4}>
          <Typography variant="displayLg" sx={{ display: "inline-block" }}>
            with the Power of
          </Typography>
          <Typography
            variant="displayLg"
            color="secondary.500"
            fontWeight={600}
            sx={{ display: "inline-block" }}
          >
            AI
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="displaySm" color="neutral.900">
        Find work-friendly cafe by analyzing reviews with AI.
      </Typography>
      <Link href="/en/search">
        <Button
          variant="contained"
          color="primary"
          sx={{
            boxShadow: 0,
            borderRadius: 10,
            ":hover": { boxShadow: 1, backgroundColor: "neutral.200" },
          }}
        >
          Free Trial with Beta
        </Button>
      </Link>
      <Image src="/landingpage/demo.png" alt="demo" width={800} height={600} />
    </Stack>
  );
};

export default Hero;
