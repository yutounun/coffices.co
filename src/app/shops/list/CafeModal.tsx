import React from "react";
import { CafeI } from "types/cafes";
import WifiIcon from "../../../../node_modules/@mui/icons-material/Wifi";
import PowerIcon from "../../../../node_modules/@mui/icons-material/Power";
import StoreMallDirectoryIcon from "../../../../node_modules/@mui/icons-material/StoreMallDirectory";
import SmokingRoomsIcon from "../../../../node_modules/@mui/icons-material/SmokingRooms";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";
import {
  Box,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import Image from "../../../../node_modules/next/image";
import { stars } from "./functions";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  height: 850,
  display: "flex",
  flexDirection: "column",
};

interface propTypes {
  showCafeDetail: boolean;
  cafe: CafeI;
  handleCafeDetailClose: () => void;
}

const CafeModal = ({
  cafe,
  showCafeDetail,
  handleCafeDetailClose,
}: propTypes) => {
  return (
    <Modal
      open={showCafeDetail}
      onClose={handleCafeDetailClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Image
          src={cafe.image}
          alt="cafe1"
          layout="responsive"
          objectFit="cover"
          width={800} // Match the modal width
          height={400} // 50% of the modal height
        />
        <Stack id="modal-modal-description" sx={{ m: 3 }} spacing={1}>
          <Typography
            variant="h4"
            sx={{ mb: "4px", display: "flex", justifyContent: "center" }}
          >
            {cafe.title}
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: "4px", display: "flex", justifyContent: "center" }}
          >
            {stars(cafe.rate)} {cafe.rate}
          </Typography>
          <Typography variant="h6">{cafe.area}</Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <StoreMallDirectoryIcon sx={{ mr: "0.5em" }} /> {cafe.openHour} ~{" "}
            {cafe.closeHour}
          </Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <WifiIcon sx={{ mr: "0.5em" }} />{" "}
            {cafe.isWifi ? <PanoramaFishEyeIcon /> : <DoDisturbAltIcon />}
          </Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <PowerIcon sx={{ mr: "0.5em" }} />{" "}
            {cafe.isOutlet ? <PanoramaFishEyeIcon /> : <DoDisturbAltIcon />}
          </Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <SmokingRoomsIcon sx={{ mr: "0.5em" }} />{" "}
            {cafe.isSmoking ? <PanoramaFishEyeIcon /> : <DoDisturbAltIcon />}
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CafeModal;
