import { Stack, Typography } from "@mui/material";
import Image from "next/image";

const featureStyle = {
  alignItems: "center",
  borderRadius: "10%",
  border: "1px solid gray",
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
            src="/landingpage/icons/engineer.svg"
            alt="work friendly"
            width={150}
            height={100}
          />
          <Typography variant="h4">Work Friendly</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Features;
