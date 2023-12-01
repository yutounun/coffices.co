"use client";
import React, { useState } from "react";
import "./cafe-list.scss";
import { Box, Stack } from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";
import CafeDescription from "./CafeDescription";
import { NextImage } from "_commons/NextImage";
import CafeDetailModal from "./CafeDetailModal";

interface propTypes {
  cafe: CafeI;
}

const CafeCard = ({ cafe }: propTypes) => {
  const [showCafeDetail, setShowCafeDetail] = useState(false);
  function handleCafeCardClick() {
    setShowCafeDetail(true);
  }
  function handleCafeDetailClose() {
    setShowCafeDetail(false);
  }
  return (
    <>
      <Stack
        sx={{
          minWidth: "300px",
          mx: "10px",
          height: "100",
          border: "1px",
          position: "relative",
          zIndex: 100,
          overflow: "visible",
          "&:hover": {
            scale: "1.07",
            transition: "all 0.5s ease",
          },
        }}
        onClick={handleCafeCardClick}
      >
        <Box sx={{ height: "200px", width: "300px" }}>
          <NextImage
            className="row__picture"
            src={cafe.image ? cafe.image : "/no-image.png"}
            alt="cafe1"
          />
          <CafeDescription cafe={cafe} />
        </Box>
      </Stack>

      {showCafeDetail && (
        <CafeDetailModal
          handleCafeDetailClose={handleCafeDetailClose}
          showCafeDetail
          cafe={cafe}
        />
      )}
    </>
  );
};

export default CafeCard;
