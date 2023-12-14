import React, { useState } from "react";
import { CafeI } from "types/cafes";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CafeEditModal from "../_edit/CafeEditModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Box,
  Button,
  Modal,
  Stack,
  Typography,
  Tooltip,
} from "../../../../node_modules/@mui/material/index";
import Stars from "_commons/Stars";
import { NextImage } from "_commons/NextImage";
import { deleteCafe } from "_utils/api";
import CafeDetailModalOverview from "./CafeDetailModalOverview";
import CafeDetailModalReviews from "./CafeDetailModalReviews";
import CafePostReviewModal from "cafe/_create/CafePostReviewModal";
import meStore from "../../../store/me";
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
  const { me } = meStore();
  const [openCafeEditModal, setOpenCafeEditModal] = useState(false);
  const [showsReviews, setShowsReviews] = useState(false);
  const [openCafeReviewModal, setOpenCafeReviewModal] = useState(false);

  function handleEditClick() {
    setOpenCafeEditModal(true);
  }

  function handleDeleteClick() {
    deleteCafe(cafe._id);
    handleCafeDetailClose();
  }

  function handleAddReviewClick() {
    setOpenCafeReviewModal(true);
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
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  alignItems: "center",
                  justifyContent: "left",
                  width: "25%",
                }}
              >
                <Button
                  onClick={() => setShowsReviews(!showsReviews)}
                  variant="contained"
                  sx={{ borderRadius: 5, width: 110, boxShadow: 0 }}
                >
                  {showsReviews ? "Overview" : "Reviews"}
                </Button>
                {showsReviews && (
                  <AddCircleOutlineIcon
                    color="primary"
                    onClick={handleAddReviewClick}
                  />
                )}
              </Stack>
              <Stack sx={{ width: "50%", justifyContent: "center" }}>
                <Typography
                  sx={{ justifyContent: "center", mx: "auto", my: 0 }}
                  variant="h3"
                >
                  {cafe.title}
                </Typography>
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
              <Stack
                direction="row"
                spacing={2}
                sx={{ width: "25%", justifyContent: "right" }}
              >
                {me.isAdmin ? (
                  <>
                    <Tooltip title="Edit">
                      <EditIcon
                        sx={{ cursor: "pointer" }}
                        onClick={handleEditClick}
                      />
                    </Tooltip>
                    <Tooltip title="Delete">
                      <DeleteIcon
                        sx={{ cursor: "pointer" }}
                        onClick={handleDeleteClick}
                      />
                    </Tooltip>
                  </>
                ) : (
                  <>
                    <Tooltip title="Not allowed">
                      <EditIcon
                        sx={{ color: "#CCCCCC" }}
                        onClick={handleEditClick}
                      />
                    </Tooltip>
                    <Tooltip title="Not allowed">
                      <DeleteIcon
                        sx={{ color: "#CCCCCC" }}
                        onClick={handleDeleteClick}
                      />
                    </Tooltip>
                  </>
                )}
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

      {openCafeReviewModal && (
        <CafePostReviewModal
          cafe={cafe}
          handleModalClose={() => setOpenCafeReviewModal(false)}
          showModal={openCafeReviewModal}
        />
      )}
    </>
  );
};

export default CafeModal;
