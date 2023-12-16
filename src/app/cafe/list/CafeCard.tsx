"use client";
import React, { useState } from "react";
import "../../styles/cafe-list.scss";
import { Box, Stack } from "../../../../node_modules/@mui/material/index";
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
          minWidth: "290px",
          mt: "5em",
          position: "relative",
          overflow: "visible",
          height: "23em",
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
