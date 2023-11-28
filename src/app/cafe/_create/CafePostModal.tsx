import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { styled } from "@mui/material/styles";
import SelectImagePage from "./SelectImagePage";

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
  borderRadius: 5,
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
  return (
    <Modal
      open={showModal}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
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
            {pageNumber !== 3 && "次へ"}
          </Button>
        </Stack>

        {/* Receive a image from user */}
        {pageNumber === 1 && <SelectImagePage />}
      </Box>
    </Modal>
  );
};

export default CafeModal;
