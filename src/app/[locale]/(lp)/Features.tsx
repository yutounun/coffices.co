import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Features = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        px: 5,
        py: 5,
        gap: 5,
      }}
    >
      <Typography variant="h2">Why This App is selected</Typography>

      {/* robot */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 7,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack sx={{ justifyContent: "center" }}>
          <Image
            src="/landingpage/robot.png"
            height={150}
            width={150}
            alt="location"
          />
        </Stack>
        <Stack>
          <Typography variant="h3">
            Evaluate Work-Friendliness with Gemini&apos;s Review Analysis
          </Typography>
          <Typography variant="body1">
            Gemini AI analyzes reviews to score how work-friendly a café is.
            Whether it&apos;s fast Wi-Fi or a quiet atmosphere, Gemini helps you
            find the ideal spot to stay productive without the guesswork.
          </Typography>
        </Stack>
      </Stack>

      {/* Location */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          gap: 7,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <Image
            src="/landingpage/location.png"
            height={150}
            width={150}
            alt="location"
          />
        </Stack>
        <Stack>
          <Typography variant="h3">
            Search Nearby Cafés Faster Than Google Maps
          </Typography>
          <Typography variant="body1">
            Using your current location, the app quickly lists nearby cafés
            without unnecessary clutter. It&apos;s the fastest way to find a
            work-friendly spot around you, saving your time and energy.
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Features;
