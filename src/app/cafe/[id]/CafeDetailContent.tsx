"use client";

import EditDeleteMenu from "@/components/ui/EditDeleteMenu";
import Stars from "@/components/ui/Stars";
import WifiOutletCigar from "@/components/ui/WifiOutletCigar";
import useSelectedCafeStore from "@/store/selectedCafe";
import { CafeI } from "@/types/cafes";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";

const detailInfoTitleStyle = {
  width: "20%",
  color: "black",
  fontWeight: "medium",
};

const detailInfoContentStyle = {
  width: "20%",
  color: "main",
};

const CafeDetailContent = ({ cafe }: { cafe: CafeI }) => {
  const { setSelectedCafeData } = useSelectedCafeStore();
  useEffect(() => {
    setSelectedCafeData(cafe);
  }, [setSelectedCafeData, cafe]);
  return (
    <Stack sx={{ my: 5 }}>
      {/* Title Line */}
      <Stack direction="row" sx={{ gap: 2, alignItems: "center" }}>
        {/* Title */}
        <Typography variant="h1">{cafe.title}</Typography>

        {/* Area */}
        <Box sx={{ position: "relative", minWidth: 50 }}>
          <Typography
            variant="body1"
            sx={{ position: "absolute", bottom: -20 }}
          >
            {cafe.area}
          </Typography>
        </Box>

        {/* Setting Button */}
        <EditDeleteMenu cafeId={cafe._id} />
      </Stack>

      {/* Stars Review */}
      <Stack direction="row" sx={{ alignItems: "center", gap: 0.5 }}>
        <Stars size={{ sm: "large", md: "x-large" }} rate={cafe.rate} />
        <Typography>{cafe.rate}</Typography>
      </Stack>

      {/* Wifi / Outlet Smoking / Area */}
      <Box sx={{ my: 1 }}>
        <WifiOutletCigar
          isWifi={!cafe.isWifi}
          isOutlet={!cafe.isOutlet}
          isSmoking={!cafe.isSmoking}
          size={20}
        />
      </Box>

      {/* Detail Info */}
      <Stack sx={{ my: 2 }}>
        {/* Station */}
        <Stack direction="row">
          <Typography variant="h4" sx={detailInfoTitleStyle}>
            Station:
          </Typography>
          <Typography variant="body1" sx={{ detailInfoContentStyle }}>
            {cafe.station}
          </Typography>
        </Stack>

        {/* Hours */}
        <Stack direction="row">
          <Typography variant="h4" sx={detailInfoTitleStyle}>
            Opening Hours:
          </Typography>
          <Typography variant="body1" sx={{ detailInfoContentStyle }}>
            {cafe.openHour}
          </Typography>
          <Typography variant="body1" sx={{ detailInfoContentStyle }}>
            ~
          </Typography>
          <Typography variant="body1" sx={{ detailInfoContentStyle }}>
            {cafe.closeHour}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CafeDetailContent;
