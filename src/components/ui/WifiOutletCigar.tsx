import { Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const WifiOutletCigar = ({
  isWifi,
  isOutlet,
  isSmoking,
  size,
}: {
  isWifi: boolean;
  isOutlet: boolean;
  isSmoking: boolean;
  size: number;
}) => {
  return (
    <Stack direction="row" sx={{ gap: 1, mt: 0.4, ml: 0.1 }}>
      {isWifi && (
        <Image src="/card/wifi.svg" alt="wifi" height={size} width={size} />
      )}
      {isOutlet && (
        <Image src="/card/outlet.svg" alt="wifi" height={size} width={size} />
      )}
      {isSmoking && (
        <Image
          src="/card/cigarette.svg"
          alt="wifi"
          height={size}
          width={size}
        />
      )}
    </Stack>
  );
};

export default WifiOutletCigar;
