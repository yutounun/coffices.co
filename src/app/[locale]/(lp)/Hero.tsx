import { Cta } from './Cta';
import { HeroTextMd } from './HeroTextMd';
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import HeroTextSm from './HeroTextSm';

const heroStyle = {
  minHeight: "60vh",
  pt: "20vh",
  gap: 3,
  pb: 10,
  alignItems: "center",
  width: "100%",
};

const Hero = () => {
  return (
    <Stack direction="column" sx={heroStyle}>
      <HeroTextMd />

      <HeroTextSm />

      <Cta />

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
