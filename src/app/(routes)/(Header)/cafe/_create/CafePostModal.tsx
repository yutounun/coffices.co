"use client";
import React, { useContext } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CafeInputForm from "./CafeInputFormPage";
import { postCafe } from "_utils/api";
import { CafePostRequestI } from "_types/cafes";
import { extractHourMinute } from "_utils/commonFn";
import { CafeListContext } from "../../../../../contexts/CafeListContext";
import useMobile from "_custom/useMobile";
import useTranslate from "_custom/useTranslate";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
}

const CafeModal = ({ showModal, handleModalClose }: propTypes) => {
  const { setCafeList } = useContext(CafeListContext);
  const { isMobile } = useMobile();
  const { t } = useTranslate();
  const height = "auto";
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 400, md: 800 },
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
      setCafeList((prev) => [...prev, res]);
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
            {t?.cafePostModal.titles.post}
          </Typography>
          {isMobile && (
            <HighlightOffIcon
              sx={{ position: "absolute", right: 30 }}
              onClick={handleModalClose}
            />
          )}
        </Stack>

        {/* input form */}
        <CafeInputForm handleCafePostSubmit={handleCafePostSubmit} />
      </Box>
    </Modal>
  );
};

export default CafeModal;
