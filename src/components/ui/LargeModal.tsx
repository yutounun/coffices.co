// components/ui/LargeModal.tsx
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface LargeModalProps {
  open: boolean;
  handleClose: () => void;
}

const LargeModal: React.FC<LargeModalProps> = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Typography variant="h6" component="h2">
          Add a Review
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This is a simple modal for adding a review.
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export default LargeModal;
