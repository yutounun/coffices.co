import React from "react";
import { CafeI } from "types/cafes";
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
  height: 800,
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
        <Stack id="modal-modal-description" sx={{ m: 2 }} spacing={1}>
          <Stack spacing={3} direction="row" sx={{ alignItems: "center" }}>
            <Typography variant="h5" sx={{ mb: "4px" }}>
              {cafe.title}
            </Typography>
            <Typography variant="h6">
              {stars(cafe.rate)} {cafe.rate}
            </Typography>
          </Stack>
          <Typography variant="subtitle1">{cafe.area}</Typography>
          <Typography variant="subtitle1">
            {cafe.openHour} ~ {cafe.closeHour}
          </Typography>
          <Typography variant="subtitle1">
            Wifi {cafe.isWifi ? "○" : "×"}
          </Typography>
          <Typography variant="subtitle1">
            電源 {cafe.isOutlet ? "○" : "×"}
          </Typography>
          <Typography variant="subtitle1">
            喫煙 {cafe.isSmoking ? "○" : "×"}
          </Typography>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CafeModal;
