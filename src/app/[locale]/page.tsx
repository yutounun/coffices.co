import pick from "lodash/pick";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { Box, Button, Stack, Typography } from "@mui/material";
import LoginContent from "#/[locale]/(login)/LoginContent";
import LoginImage from "#/[locale]/(login)/LoginImage";
import { mobile } from "@/utils/const";
import ResponsiveAppBar from "@/components/Header";
import Image from "next/image";
import Stars from "@/components/ui/Stars";
import CafeListContent from "#/[locale]/cafe/list/CafeListContent";
import Link from "next/link";

export default function Home() {
  // const loginStyles = {
  //   height: "100vh",
  //   background: "white",
  //   justifyContent: "center",
  //   overflow: "hidden",
  //   px: { xs: mobile.space.aroundX, md: 10 },
  // };
  const featureStyle = {
    alignItems: "center",
    borderRadius: "10%",
    border: "1px solid gray",
    px: 2,
    gap: 1,
    py: 2,
  };

  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "home")}>
      <Box>
        {/* <LoginContent />
        <LoginImage /> */}
        <ResponsiveAppBar />

        {/* Hero Section */}
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

        {/* Feature Section */}
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            px: 10,
            py: 5,
            gap: 5,
          }}
        >
          <Typography variant="h2">What you can know about.</Typography>

          <Stack
            direction="row"
            sx={{
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            <Stack direction="column" sx={featureStyle}>
              <Image
                src="/landingpage/icons/wifi.svg"
                alt="coffee"
                width={150}
                height={80}
              />
              <Typography variant="h4">Wifi</Typography>
            </Stack>
            <Stack direction="column" sx={featureStyle}>
              <Image
                src="/landingpage/icons/plug.svg"
                alt="coffee"
                width={150}
                height={100}
              />
              <Typography variant="h4">Plug</Typography>
            </Stack>
            <Stack direction="column" sx={featureStyle}>
              <Image
                src="/landingpage/icons/coffee.svg"
                alt="coffee"
                width={150}
                height={100}
              />
              <Typography variant="h4">Min-Coffee Price</Typography>
            </Stack>
            <Stack direction="column" sx={featureStyle}>
              <Image
                src="/landingpage/icons/washroom.svg"
                alt="coffee"
                width={150}
                height={100}
              />
              <Typography variant="h4">Washroom</Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Review Section */}
        <Stack
          sx={{
            px: 10,
            py: 5,
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              px: 10,
              py: 5,
              gap: 2,
            }}
          >
            <Typography variant="h2">
              "This app boosted my productivity by 50%!"
            </Typography>
            <Stack direction="row" sx={{ gap: 2 }}>
              <Stack direction="row">
                <Stars size={{ xs: "small", md: "large" }} rate={5} />
              </Stack>
              <Typography variant="h4">Donald Trump</Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              px: 10,
              py: 5,
              gap: 2,
            }}
          >
            <Typography variant="h2">
              "This is one of the best app I have ever seen!"
            </Typography>
            <Stack direction="row" sx={{ gap: 2 }}>
              <Stack direction="row">
                <Stars size={{ xs: "small", md: "large" }} rate={4.5} />
              </Stack>
              <Typography variant="h4">J.Conner</Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Cafe Section */}
        <Box sx={{ px: 10, py: 5 }}>
          <CafeListContent />
        </Box>

        {/* Footer Section */}
        <Stack
          sx={{
            px: 10,
            py: 5,
            backgroundColor: "secondary.main",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              px: 10,
              py: 5,
              gap: 2,
              backgroundColor: "secondary.main",
            }}
          >
            <Typography variant="h2" sx={{ color: "white" }}>
              Find your next cafe
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Find your next cafe
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </NextIntlClientProvider>
  );
}
