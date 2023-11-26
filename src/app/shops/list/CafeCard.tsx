"use client";
import React, { useState } from "react";
import "./cafe-list.scss";
import {
  Box,
  Modal,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";
import CafeDescription from "./CafeDescription";
import { NextImage } from "_commons/NextImage";
import CafeModal from "./CafeModal";

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
    console.log("showCafeDetail :", showCafeDetail);
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
          <NextImage src={cafe.image} alt="cafe1" />
          <CafeDescription cafe={cafe} />
        </Box>
      </Stack>

      {showCafeDetail && (
        <CafeModal
          handleCafeDetailClose={handleCafeDetailClose}
          showCafeDetail
          cafe={cafe}
        />
      )}
    </>
  );
};

export default CafeCard;
