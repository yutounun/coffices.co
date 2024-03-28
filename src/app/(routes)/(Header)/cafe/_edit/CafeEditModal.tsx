"use client";
import React, { useContext, useState } from "react";
import { Box, Modal, Stack, Typography } from "@mui/material";
import CafeEditForm from "./CafeEditFormPage";
import { putCafe } from "_utils/api";
import { CafeI, CafePutRequestI } from "_types/cafes";
import { extractHourMinute } from "_utils/commonFn";
import { cafeImageUpload } from "_utils/api";
import { CafeListContext } from "../../../../../contexts/CafeListContext";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
  cafe: CafeI;
}

const CafeEditModal = ({ showModal, handleModalClose, cafe }: propTypes) => {
  let { setCafeList } = useContext(CafeListContext);

  const [cafeImageFile, setCafeImageFile] = useState<any>(null);

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
  async function handleCafePutSubmit(data: CafePutRequestI) {
    data.isWifi = data.isWifi === "true";
    data.isOutlet = data.isOutlet === "true";
    data.isSmoking = data.isSmoking === "true";
    data.openHour = extractHourMinute(data.openHour);
    data.closeHour = extractHourMinute(data.closeHour);

    // Upload image and retrieve url
    if (cafeImageFile) {
      await cafeImageUpload(cafeImageFile).then((res: any) => {
        data.image = res.url || "";
        // And then, update detailed cafe data
        putCafe(data).then((res) => {
          setCafeList(res);
          handleModalClose();
        });
      });
    } else {
      await putCafe(data).then((res) => {
        setCafeList(res);
        handleModalClose();
      });
    }
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
            カフェ情報を編集
          </Typography>
        </Stack>

        <CafeEditForm cafe={cafe} handleCafePutSubmit={handleCafePutSubmit} />
      </Box>
    </Modal>
  );
};

export default CafeEditModal;
