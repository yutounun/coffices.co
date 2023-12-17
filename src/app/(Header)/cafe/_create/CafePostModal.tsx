"use client";
import React, { useContext } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import CafeInputForm from "./CafeInputFormPage";
import { postCafe } from "_utils/api";
import { CafePostRequestI } from "types/cafes";
import { extractHourMinute } from "_utils/commonFn";
import { CafeListContext } from "../../../../contexts/CafeListContext";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
}

const CafeModal = ({ showModal, handleModalClose }: propTypes) => {
  const { setCafeList } = useContext(CafeListContext);

  const height = "auto";
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    pb: 5,
    height: height,
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  };

  /** Submit action */
  async function handleCafePostSubmit(data: CafePostRequestI) {
    data.isWifi = data.isWifi === "true";
    data.isOutlet = data.isOutlet === "true";
    data.isSmoking = data.isSmoking === "true";
    data.openHour = extractHourMinute(data.openHour);
    data.closeHour = extractHourMinute(data.closeHour);

    // Upload image and retrieve url
    data.reviews = [];
    postCafe(data).then((res) => {
      setCafeList(res);
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            カフェを新規追加
          </Typography>
        </Stack>

        <CafeInputForm handleCafePostSubmit={handleCafePostSubmit} />
      </Box>
    </Modal>
  );
};

export default CafeModal;
