import React from "react";
import { CafeI } from "types/cafes";
import { Stack, Typography } from "@mui/material";
import TrainIcon from "@mui/icons-material/Train";
import WifiIcon from "@mui/icons-material/Wifi";
import PowerIcon from "@mui/icons-material/Power";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const CafeDetailModalOverview = ({ cafe }: { cafe: CafeI }) => {
  return (
    <>
      <Typography variant="h6" sx={{ alignItems: "center", display: "flex" }}>
        <AlternateEmailIcon color="primary" sx={{ mr: "0.5em" }} />
        {cafe.area}
      </Typography>
      <Typography variant="h6" sx={{ alignItems: "center", display: "flex" }}>
        <TrainIcon color="primary" sx={{ mr: "0.5em" }} />
        {cafe.station}
      </Typography>
      <Typography variant="h6" sx={{ alignItems: "center", display: "flex" }}>
        <StoreMallDirectoryIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
        {cafe.openHour} ~ {cafe.closeHour}
      </Typography>
      <Typography variant="h6" sx={{ alignItems: "center", display: "flex" }}>
        <WifiIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
        {cafe.isWifi ? (
          <PanoramaFishEyeIcon color="success" />
        ) : (
          <DoDisturbAltIcon color="success" />
        )}
      </Typography>
      <Typography variant="h6" sx={{ alignItems: "center", display: "flex" }}>
        <PowerIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
        {cafe.isOutlet ? (
          <PanoramaFishEyeIcon color="success" />
        ) : (
          <DoDisturbAltIcon color="success" />
        )}
      </Typography>
      <Typography variant="h6" sx={{ alignItems: "center", display: "flex" }}>
        <SmokingRoomsIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
        {cafe.isSmoking ? (
          <PanoramaFishEyeIcon color="success" />
        ) : (
          <DoDisturbAltIcon color="success" />
        )}
      </Typography>
    </>
  );
};

export default CafeDetailModalOverview;
