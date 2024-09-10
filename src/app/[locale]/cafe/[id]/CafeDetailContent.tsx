"use client";

import EditDeleteMenu from "@/components/ui/EditDeleteMenu";
import Stars from "@/components/ui/Stars";
import useSelectedCafeStore from "@/store/selectedCafe";
import { CafeI } from "@/types/cafes";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CardIcons from "../list/CardIcons";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import stationsArea from "@/data/stationsArea.json";

const detailInfoTitleStyle = {
  width: { xs: "40%", md: "20%" },
  color: "black",
  fontWeight: "medium",
};

const detailInfoContentStyle = {
  width: "20%",
  color: "main",
};

const CafeDetailContent = ({ cafe }: { cafe: CafeI }) => {
  const t = useTranslations("detail");
  const pathname = usePathname();
  const pathLanguage = pathname.split("/")[1];
  const { setSelectedCafeData } = useSelectedCafeStore();

  useEffect(() => {
    setSelectedCafeData(cafe);
  }, [setSelectedCafeData, cafe]);

  const translatedArea = () => {
    return pathLanguage === "en"
      ? stationsArea.find((area) => cafe.area === area.ja)?.en
      : stationsArea.find((area) => cafe.area === area.ja)?.ja;
  };

  const translatedStation = () => {
    return pathLanguage === "en"
      ? stationsArea.find((station) => cafe.station === station.ja)?.en
      : stationsArea.find((station) => cafe.station === station.ja)?.ja;
  };
  return (
    <Stack sx={{ my: 5 }}>
      {/* Title Line */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ gap: { xs: 0, md: 2 }, alignItems: { xs: "left", md: "center" } }}
      >
        {/* Title */}
        <Typography variant="h1">{cafe.title}</Typography>

        <Stack direction="row" sx={{ alignItems: "center", minWidth: 70 }}>
          {/* Area */}
          <Typography variant="body1">{translatedArea()}</Typography>

          {/* Setting Button */}
          <EditDeleteMenu cafe={cafe} />
        </Stack>
      </Stack>

      {/* Stars Review */}
      <Stack direction="row" sx={{ alignItems: "center", gap: 0.5 }}>
        <Stars size={{ xs: "large", md: "x-large" }} rate={cafe.rate} />
        <Typography>{cafe.rate}</Typography>
      </Stack>

      {/* Wifi / Outlet Smoking / Area */}
      <Box sx={{ my: 1 }}>
        <CardIcons cafe={cafe} />
      </Box>

      {/* Detail Info */}
      <Stack sx={{ my: { xs: 0, md: 2 } }}>
        {/* Station */}
        <Stack direction="row">
          <Typography variant="h4" sx={detailInfoTitleStyle}>
            {t("content.station")}
          </Typography>
          <Typography variant="body1" sx={{ detailInfoContentStyle }}>
            {translatedStation()}
          </Typography>
        </Stack>

        {/* Hours */}
        <Stack direction="row">
          <Typography variant="h4" sx={detailInfoTitleStyle}>
            {t("content.openingHours")}
          </Typography>
          {cafe.openHour && cafe.closeHour && (
            <>
              <Typography variant="body1" sx={{ detailInfoContentStyle }}>
                {cafe.openHour}
              </Typography>
              <Typography variant="body1" sx={{ detailInfoContentStyle }}>
                ~
              </Typography>
              <Typography variant="body1" sx={{ detailInfoContentStyle }}>
                {cafe.closeHour}
              </Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CafeDetailContent;
