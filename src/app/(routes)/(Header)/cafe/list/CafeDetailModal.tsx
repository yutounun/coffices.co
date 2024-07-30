import React, { useContext, useState } from "react";
import { CafeI } from "#/_types/cafes";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CafeEditModal from "#/(routes)/(Header)/cafe/_edit/CafeEditModal";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Button, Modal, Stack, Typography, Tooltip } from "@mui/material";
import Stars from "@/components/Stars";
import { NextImage } from "@/components/NextImage";
import { deleteCafe } from "@/utils/api";
import CafeDetailModalOverview from "./CafeDetailModalOverview";
import CafeDetailModalReviews from "./CafeDetailModalReviews";
import CafePostReviewModal from "#/(routes)/(Header)/cafe/_create/CafePostReviewModal";
import meStore from "@/store/me";
import { CafeListContext } from "@/contexts/CafeListContext";
import useMobile from "@/hooks/useMobile";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 400, md: 800 },
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "80%",
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
  const { isMobile } = useMobile();
  const [openCafeEditModal, setOpenCafeEditModal] = useState(false);
  const [showsReviews, setShowsReviews] = useState(false);
  const [openCafeReviewModal, setOpenCafeReviewModal] = useState(false);
  const { setCafeList } = useContext(CafeListContext);

  function handleEditClick() {
    setOpenCafeEditModal(true);
  }

  function handleDeleteClick() {
    deleteCafe(cafe._id).then((res) => {
      setCafeList(res);
    });

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
          {/* Cafe Image */}
          <Box sx={{ height: { xs: "30%", md: "45%" } }}>
            {isMobile && (
              <CancelIcon
                sx={{
                  color: "white",
                  position: "absolute",
                  right: 30,
                  top: 10,
                  zIndex: 20,
                }}
                onClick={handleCafeDetailClose}
              />
            )}
            <NextImage
              src={cafe.image ? cafe.image : "/coffee.jpg"}
              alt="cafe1"
              className="top-rounded"
            />
          </Box>

          {/* Description */}
          <Stack
            id="modal-modal-description"
            sx={{ mx: 5, my: 3, pb: "3%", height: { xs: "62%", md: "40%" } }}
            spacing={2}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                justifyContent: { xs: "center", md: "space-between" },
              }}
            >
              {/* review button */}
              {!isMobile && (
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
              )}

              <Stack
                sx={{
                  width: { xs: "90%", md: "50%" },
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    justifyContent: "center",
                    my: 0,
                    textAlign: "center",
                    fontSize: { xs: "1.4em", md: "2em" },
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "100%",
                  }}
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

              {/* edit / delete icon */}
              {!isMobile && (
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ width: "25%", justifyContent: "right" }}
                >
                  {/* admin role */}
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
                    // non-admin role
                    <>
                      <Tooltip title="Not allowed">
                        <EditIcon
                          sx={{ color: "#/_CCCCCC" }}
                          onClick={handleEditClick}
                        />
                      </Tooltip>
                      <Tooltip title="Not allowed">
                        <DeleteIcon
                          sx={{ color: "#/_CCCCCC" }}
                          onClick={handleDeleteClick}
                        />
                      </Tooltip>
                    </>
                  )}
                </Stack>
              )}
            </Stack>

            {/* review and overview button */}
            {isMobile && (
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Button
                  onClick={() => setShowsReviews(!showsReviews)}
                  variant="contained"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    fontSize: { xs: "0.7em", md: "1em" },
                    borderRadius: 5,
                    width: 110,
                    boxShadow: 0,
                  }}
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
            )}
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
