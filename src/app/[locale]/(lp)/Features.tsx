import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const featureStyle = {
  alignItems: "center",
  borderRadius: "3%",
  border: "1px solid gray",
  width: "17em",
  px: 2,
  gap: 1,
  py: 2,
};

const Features = () => {
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        px: 10,
        py: 5,
        gap: 5,
      }}
    >
      <Typography variant="h2">Why Choose Our App?</Typography>

      <Stack
        direction="row"
        sx={{
          gap: 7,
          justifyContent: "space-between",
        }}
      >
        <Stack direction="column" sx={featureStyle}>
          <Image
            src="/landingpage/icons/wifi.svg"
            alt="coffee"
            width={130}
            height={80}
          />
          <Typography variant="h4">WiFi Availability</Typography>
          <Typography variant="body1">
            Find cafes with reliable and fast WiFi so you can stay connected and
            get things done.
          </Typography>
        </Stack>
        <Stack direction="column" sx={featureStyle}>
          <Image
            src="/landingpage/icons/plug.svg"
            alt="coffee"
            width={130}
            height={80}
          />
          <Typography variant="h4">Power Outlets Information</Typography>
          <Typography variant="body1">
            Never worry about running out of battery! Check cafes with
            accessible power plugs for uninterrupted work.
          </Typography>
        </Stack>
        <Stack direction="column" sx={featureStyle}>
          <Image
            src="/landingpage/icons/coffee.svg"
            alt="coffee"
            width={130}
            height={80}
          />
          <Typography variant="h4">Coffee Price Transparency</Typography>
          <Typography variant="body1">
            Discover cafes tailored for remote work, with suitable seating,
            quiet spaces, and a focused atmosphere.
          </Typography>
        </Stack>
        <Stack direction="column" sx={featureStyle}>
          <Image
            src="/landingpage/icons/engineer.svg"
            alt="work friendly"
            width={130}
            height={80}
          />
          <Typography variant="h4">Comfortable Work Environment</Typography>
          <Typography variant="body1">
            Discover cafes tailored for remote work, with suitable seating,
            quiet spaces, and a focused atmosphere
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Features;
