import { CafeI } from "@/types/cafes";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const CardIcons = ({ cafe }: { cafe: CafeI }) => {
  return (
    <Stack direction="row" sx={{ gap: 1, mt: 0.4, ml: 0.1 }}>
      {cafe.isWifi && (
        <Box
          sx={{
            width: { xs: 14, sm: 17 },
            height: { xs: 14, sm: 17 },
            position: "relative",
          }}
        >
          <Image
            src="/card/wifi.svg"
            alt="wifi"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      )}
      {cafe.isOutlet && (
        <Box
          sx={{
            width: { xs: 14, sm: 17 },
            height: { xs: 14, sm: 17 },
            position: "relative",
          }}
        >
          <Image
            src="/card/outlet.svg"
            alt="outlet"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      )}
      {cafe.isSmoking && (
        <Box
          sx={{
            width: { xs: 14, sm: 17 },
            height: { xs: 14, sm: 17 },
            position: "relative",
          }}
        >
          <Image
            src="/card/cigarette.svg"
            alt="smoking"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      )}
    </Stack>
  );
};

export default CardIcons;
