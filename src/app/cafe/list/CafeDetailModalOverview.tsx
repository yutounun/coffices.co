import React from "react";
import { CafeI } from "@/types/cafes";
import { Typography } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import WifiIcon from "@mui/icons-material/Wifi";
import PowerIcon from "@mui/icons-material/Power";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import useMobile from "@/hooks/useMobile";

const CafeDetailModalOverview = ({ cafe }: { cafe: CafeI }) => {
  const { isMobile } = useMobile();
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <AlternateEmailIcon
          fontSize={isMobile ? "small" : "medium"}
          color="primary"
          sx={{ mr: "0.5em" }}
        />
        {cafe.area}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <TrainIcon
          fontSize={isMobile ? "small" : "medium"}
          color="primary"
          sx={{ mr: "0.5em" }}
        />
        {cafe.station}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <StoreMallDirectoryIcon
          fontSize={isMobile ? "small" : "medium"}
          color="primary"
          sx={{ mr: "0.5em" }}
        />{" "}
        {cafe.openHour} ~ {cafe.closeHour}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <WifiIcon
          fontSize={isMobile ? "small" : "medium"}
          color="primary"
          sx={{ mr: "0.5em" }}
        />{" "}
        {cafe.isWifi ? (
          <PanoramaFishEyeIcon
            fontSize={isMobile ? "small" : "medium"}
            color="success"
          />
        ) : (
          <DoDisturbAltIcon
            fontSize={isMobile ? "small" : "medium"}
            color="success"
          />
        )}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <PowerIcon
          color="primary"
          fontSize={isMobile ? "small" : "medium"}
          sx={{ mr: "0.5em" }}
        />{" "}
        {cafe.isOutlet ? (
          <PanoramaFishEyeIcon
            fontSize={isMobile ? "small" : "medium"}
            color="success"
          />
        ) : (
          <DoDisturbAltIcon
            fontSize={isMobile ? "small" : "medium"}
            color="success"
          />
        )}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "1rem", md: "1.3rem" },
          alignItems: "center",
          display: "flex",
        }}
      >
        <SmokingRoomsIcon
          fontSize={isMobile ? "small" : "medium"}
          color="primary"
          sx={{ mr: "0.5em" }}
        />{" "}
        {cafe.isSmoking ? (
          <PanoramaFishEyeIcon
            fontSize={isMobile ? "small" : "medium"}
            color="success"
          />
        ) : (
          <DoDisturbAltIcon
            fontSize={isMobile ? "small" : "medium"}
            color="success"
          />
        )}
      </Typography>
    </>
  );
};

export default CafeDetailModalOverview;
