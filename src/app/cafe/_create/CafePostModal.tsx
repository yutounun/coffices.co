"use client";
import React, { useContext } from "react";

import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Modal,
  Stack,
  Typography,
  Fade,
  Backdrop,
  IconButton,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CafeInputForm from "./CafeInputFormPage";
import useMobile from "@/hooks/useMobile";
import useTranslate from "@/hooks/useTranslate";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
}

const CafeModal = ({ showModal, handleModalClose }: propTypes) => {
  const { t } = useTranslate();
  const height = "auto";
  const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 400, md: 400 },
    bgcolor: "background.paper",
    boxShadow: 24,
    py: 3,
    px: 4,
    height: height,
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  };

  return (
    <Modal
      open={showModal}
      onClose={handleModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={showModal}>
        <Box sx={modalStyle}>
          {/* Close Icon */}
          <Box sx={{ position: "absolute", top: 16, right: 20 }}>
            <IconButton onClick={handleModalClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Modal Header */}
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">{t?.cafePostModal.titles.post}</Typography>
          </Stack>

          {/* Input form */}
          <CafeInputForm handleModalClose={handleModalClose} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default CafeModal;
