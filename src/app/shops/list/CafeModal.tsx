import React from "react";
import { CafeI } from "types/cafes";
import WifiIcon from "../../../../node_modules/@mui/icons-material/Wifi";
import PowerIcon from "../../../../node_modules/@mui/icons-material/Power";
import StoreMallDirectoryIcon from "../../../../node_modules/@mui/icons-material/StoreMallDirectory";
import SmokingRoomsIcon from "../../../../node_modules/@mui/icons-material/SmokingRooms";
import PanoramaFishEyeIcon from "../../../../node_modules/@mui/icons-material/PanoramaFishEye";
import DoDisturbAltIcon from "../../../../node_modules/@mui/icons-material/DoDisturbAlt";
import AlternateEmailIcon from "../../../../node_modules/@mui/icons-material/AlternateEmail";
import {
  Box,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import Image from "../../../../node_modules/next/image";
import Stars from "_commons/Stars";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  height: 880,
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
          alt={cafe.title}
          layout="responsive"
          objectFit="cover"
          width={800} // Match the modal width
          height={400} // 50% of the modal height
        />
        <Stack id="modal-modal-description" sx={{ mx: 5, my: 3 }} spacing={2}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            {cafe.title}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Stars rate={cafe.rate} />
            <Typography variant="subtitle1" color="text.secondary">
              {cafe.rate.toFixed(1)}
            </Typography>
          </Stack>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <AlternateEmailIcon color="primary" sx={{ mr: "0.5em" }} />
            {cafe.area}
          </Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <StoreMallDirectoryIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
            {cafe.openHour} ~ {cafe.closeHour}
          </Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <WifiIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
            {cafe.isWifi ? (
              <PanoramaFishEyeIcon color="success" />
            ) : (
              <DoDisturbAltIcon color="success" />
            )}
          </Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <PowerIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
            {cafe.isOutlet ? (
              <PanoramaFishEyeIcon color="success" />
            ) : (
              <DoDisturbAltIcon color="success" />
            )}
          </Typography>
          <Typography
            variant="h6"
            sx={{ alignItems: "center", display: "flex" }}
          >
            <SmokingRoomsIcon color="primary" sx={{ mr: "0.5em" }} />{" "}
            {cafe.isSmoking ? (
              <PanoramaFishEyeIcon color="success" />
            ) : (
              <DoDisturbAltIcon color="success" />
            )}
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CafeModal;
