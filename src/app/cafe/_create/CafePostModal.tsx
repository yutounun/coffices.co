import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import SelectImagePage from "./SelectImagePage";
import CafeInputForm from "./CafeInputFormPage";
import { postCafe } from "_utils/api";
import { CafePostRequestI } from "types/cafes";
import { extractHourMinute } from "_utils/commonFn";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  pb: 5,
  minHeight: 940,
  display: "flex",
  flexDirection: "column",
  borderRadius: 5,
};

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
}

const CafeModal = ({ showModal, handleModalClose }: propTypes) => {
  const [pageNumber, setPageNumber] = useState(1);
  function incrementPageNumber() {
    setPageNumber((prev) => prev + 1);
  }
  function decrementPageNumber() {
    setPageNumber((prev) => prev - 1);
  }

  /** Submit action */
  function handleCafePostSubmit(data: CafePostRequestI) {
    data.isWifi = data.isWifi === "true";
    data.isOutlet = data.isOutlet === "true";
    data.isSmoking = data.isSmoking === "true";
    data.openHour = extractHourMinute(data.openHour);
    data.closeHour = extractHourMinute(data.closeHour);
    postCafe(data).then(() => {
      handleModalClose();
    });
  }
  return (
    <Modal
      open={showModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        {/* Modal Header */}
        <Stack
          direction="row"
          sx={{
            borderBottom: "solid 1px",
            px: 5,
            py: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={decrementPageNumber} sx={{ fontWeight: "bold" }}>
            {pageNumber !== 1 && "前へ"}
          </Button>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            カフェを新規追加
          </Typography>
          <Button onClick={incrementPageNumber} sx={{ fontWeight: "bold" }}>
            {pageNumber !== 2 && "次へ"}
          </Button>
        </Stack>

        {/* Modal Body */}
        {pageNumber === 1 && <SelectImagePage />}
        {pageNumber === 2 && (
          <CafeInputForm handleCafePostSubmit={handleCafePostSubmit} />
        )}
      </Box>
    </Modal>
  );
};

export default CafeModal;
