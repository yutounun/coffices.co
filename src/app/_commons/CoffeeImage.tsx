import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const CoffeeImage = ({ height, width }: { height: number; width: number }) => {
  return (
    <Stack
      sx={{ width: "10em", mt: 10, height: "15em", transform: "lotate(45deg)" }}
      direction="row"
    >
      <Image
        src="/flying-beans.png"
        alt="coffee-beans"
        width={width}
        height={height}
        style={{
          transform: "rotate(12deg)",
          zIndex: 0,
          position: "absolute",
          right: 140,
          top: 0,
        }}
      />
      <Image
        style={{
          transform: "rotate(12deg)",
          zIndex: 40,
          position: "absolute",
          right: 20,
        }}
        src="/coffee-cup.png"
        alt="coffee-cup"
        width={width}
        height={height}
      />
    </Stack>
  );
};

export default CoffeeImage;
