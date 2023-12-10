import React, { useState } from "react";
import { CafeI } from "types/cafes";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CafeEditModal from "../_edit/CafeEditModal";
import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import Stars from "_commons/Stars";
import { NextImage } from "_commons/NextImage";
import { deleteCafe } from "_utils/api";
import CafeDetailModalOverview from "./CafeDetailModalOverview";
import CafeDetailModalReviews from "./CafeDetailModalReviews";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "90%",
  display: "flex",
  flexDirection: "column",
  borderRadius: 5,
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
  const [openCafeEditModal, setOpenCafeEditModal] = useState(false);
  const [showsReviews, setShowsReviews] = useState(false);

  function handleEditClick() {
    setOpenCafeEditModal(true);
  }

  function handleDeleteClick() {
    deleteCafe(cafe._id);
    handleCafeDetailClose();
  }
  return (
    <>
      <Modal
        open={showCafeDetail}
        onClose={handleCafeDetailClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ height: "60%" }}>
            <NextImage
              src={cafe.image ? cafe.image : "/no-image.png"}
              alt="cafe1"
              className="top-rounded"
            />
          </Box>
          <Stack
            id="modal-modal-description"
            sx={{ mx: 5, my: 3, pb: "3%", height: "40%" }}
            spacing={2}
          >
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Button
                onClick={() => setShowsReviews(!showsReviews)}
                variant="contained"
                sx={{ borderRadius: 5, width: 110, boxShadow: 0 }}
              >
                {showsReviews ? "Overview" : "Reviews"}
              </Button>
              <Stack>
                <Typography variant="h3">{cafe.title}</Typography>
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", justifyContent: "center" }}
                  spacing={1}
                >
                  <Stars rate={cafe.rate} />
                  <Typography variant="subtitle1" color="text.secondary">
                    {cafe.rate}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2}>
                <EditIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleEditClick}
                />
                <DeleteIcon
                  sx={{ cursor: "pointer" }}
                  onClick={handleDeleteClick}
                />
              </Stack>
            </Stack>
            {showsReviews ? (
              <CafeDetailModalReviews cafe={cafe} />
            ) : (
              <CafeDetailModalOverview cafe={cafe} />
            )}
          </Stack>
        </Box>
      </Modal>
      {openCafeEditModal && (
        <CafeEditModal
          cafe={cafe}
          handleModalClose={() => setOpenCafeEditModal(false)}
          showModal={openCafeEditModal}
        />
      )}
    </>
  );
};

export default CafeModal;
