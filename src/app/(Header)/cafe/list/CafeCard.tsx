"use client";
import React, { useState } from "react";
import "../../../styles/cafe-list.scss";
import { Box, Stack } from "@mui/material";
import { CafeI } from "types/cafes";
import CafeDescription from "./CafeDescription";
import { NextImage } from "_commons/NextImage";
import CafeDetailModal from "./CafeDetailModal";
import Card from "@mui/material/Card";

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
      <Card
        sx={{
          minWidth: { xs: "12em", md: "20em" },
          mt: "2em",
          mr: "2em",
          position: "relative",
          overflow: "visible",
          height: { xs: "13em", md: "360px" },
          "&:hover": {
            scale: "1.07",
            transition: "all 0.5s ease",
          },
        }}
        onClick={handleCafeCardClick}
      >
        <Box sx={{ height: { xs: "100px", md: "55%" }, width: "100%" }}>
          <NextImage
            className="row__picture"
            src={cafe.image ? cafe.image : "/coffee.jpg"}
            alt="cafe1"
          />
          <CafeDescription cafe={cafe} />
        </Box>
      </Card>
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
