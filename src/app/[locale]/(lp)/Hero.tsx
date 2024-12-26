import { Box, Button, Stack, Typography } from "@mui/material";
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
      }}
    >
      {/* lg */}
      <Stack
        direction="column"
        gap={1}
        alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
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

      {/* sm*/}
      <Stack
        sx={{ alignItems: "center", display: { xs: "flex", md: "none" } }}
        gap={1}
      >
        <Typography variant="displayLg">Find Cafe for Work</Typography>
        <Typography
          variant="displayLg"
          sx={{
            textAlign: "center",
          }}
        >
          with AI
        </Typography>
      </Stack>

      <Typography
        variant="displaySm"
        color="neutral.900"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        Find work-friendly cafe by analyzing reviews with AI.
      </Typography>
      <Typography
        variant="displaySm"
        color="neutral.900"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        Analyzing cafe reviews with AI.
      </Typography>

      <Link href="/en/search">
        <Button
          variant="contained"
          color="primary"
          sx={{
            boxShadow: 0,
            borderRadius: 10,
            ":hover": { boxShadow: 1, backgroundColor: "primary.300" },
          }}
        >
          Free Trial with Beta
        </Button>
      </Link>
      <Box
        sx={{
          width: { xs: "90%", md: "30%" },
          height: "auto",
          position: "relative",
        }}
      >
        <Image
          src="/landingpage/demo.png"
          alt="demo"
          layout="responsive"
          width={400}
          height={300}
        />
      </Box>
    </Stack>
  );
};

export default Hero;
