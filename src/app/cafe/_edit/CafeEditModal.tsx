"use client";
import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import EditImagePage from "./EditImagePage";
import CafeEditForm from "./CafeEditFormPage";
import { putCafe } from "_utils/api";
import { CafeI, CafePostRequestI, CafePutRequestI } from "types/cafes";
import { extractHourMinute } from "_utils/commonFn";
import { cafeImageUpload } from "_utils/api";

interface propTypes {
  showModal: boolean;
  handleModalClose: () => void;
  cafe: CafeI;
}

const CafeEditModal = ({ showModal, handleModalClose, cafe }: propTypes) => {
  const [pageNumber, setPageNumber] = useState(1);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [cafeImageFile, setCafeImageFile] = useState<any>(null);

  const height = pageNumber === 1 ? "60%" : "auto";
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

  function incrementPageNumber() {
    setPageNumber((prev) => prev + 1);
    console.log("cafe :", cafe);
  }
  function decrementPageNumber() {
    setPageNumber((prev) => prev - 1);
  }

  /**
   * Retrieves the selected image file from the input file reference.
   *
   * @return {File} The selected image file.
   */
  function getImageFile() {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    setCafeImageFile(inputFileRef.current.files[0]);
  }

  /** Submit action */
  async function handleCafePutSubmit(data: CafePutRequestI) {
    console.log(
      "🚀 ~ file: CafeEditModal.tsx:67 ~ handleCafePutSubmit ~ data:",
      data
    );
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
        putCafe(data).then(() => {
          handleModalClose();
        });
      });
    } else {
      putCafe(data).then(() => {
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button onClick={decrementPageNumber} sx={{ fontWeight: "bold" }}>
            {pageNumber !== 1 && "前へ"}
          </Button>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            カフェ情報を編集
          </Typography>
          <Button onClick={incrementPageNumber} sx={{ fontWeight: "bold" }}>
            {pageNumber !== 2 && "次へ"}
          </Button>
        </Stack>

        {/* Modal Body */}
        {pageNumber === 1 && (
          <EditImagePage
            imageUrl={cafe.image}
            inputFileRef={inputFileRef}
            getImageFile={getImageFile}
          />
        )}
        {pageNumber === 2 && (
          <CafeEditForm cafe={cafe} handleCafePutSubmit={handleCafePutSubmit} />
        )}
      </Box>
    </Modal>
  );
};

export default CafeEditModal;
