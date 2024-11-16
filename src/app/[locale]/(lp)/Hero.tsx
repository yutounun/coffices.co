import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Hero = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: "relative",
        mt: 8,
        minHeight: "60vh",
        width: "100%",
        backgroundColor: "custom.lightGray",
        px: 10,
        py: 5,
        backgroundImage: "url('/login/background/friends.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />

      {/* Left Content */}
      <Stack
        sx={{
          width: "50%",
          justifyContent: "center",
          zIndex: 3,
          gap: 1,
          marginLeft: { xs: 0, md: 10 },
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "medium", color: "white", fontSize: "1.4rem" }}
        >
          Nomad Cafe
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontWeight: "bold", color: "white", fontSize: "3rem" }}
        >
          Find a cafes for your work
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "medium",
            color: "white",
            fontSize: "1.4rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: "100px",
              height: "1px",
              backgroundColor: "white",
              marginRight: 16,
            }}
          ></span>
          Boost your productivity
        </Typography>
      </Stack>
      <Stack
        sx={{
          width: "50%",
          zIndex: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/ja/search">
          <Button size="large" variant="contained">
            With your location
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Hero;
