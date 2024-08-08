"use client";
import React, { useMemo } from "react";

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
import CafeInputForm from "./CafeInputFormPage";
import { useTranslations } from "next-intl";
import useCafeModalStore from "@/store/openCafeModal";

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
  height: "auto",
  display: "flex",
  flexDirection: "column",
  borderRadius: 5,
};

const CafeModal = () => {
  const t = useTranslations("homecafePostModal");
  const { closeCafeModal, modalType, showsCafeModal, setModalType } =
    useCafeModalStore();

  const heading = useMemo(() => {
    return modalType === "edit" ? t("titles.edit") : t("titles.post");
  }, [modalType, t]);

  const handleCloseModal = () => {
    setModalType("post");
    closeCafeModal();
  };

  return (
    <Modal
      open={showsCafeModal}
      onClose={handleCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={showsCafeModal}>
        <Box sx={modalStyle}>
          {/* Close Icon */}
          <Box sx={{ position: "absolute", top: 16, right: 20 }}>
            <IconButton onClick={handleCloseModal}>
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
            <Typography variant="h3">{heading}</Typography>
          </Stack>

          {/* Input form */}
          <CafeInputForm handleModalClose={handleCloseModal} />
        </Box>
      </Fade>
    </Modal>
  );
};

export default CafeModal;
