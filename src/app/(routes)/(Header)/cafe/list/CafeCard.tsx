"use client";
import React, { useState } from "react";
import "_styles/cafe-list.scss";
import { Box, Typography, Stack } from "@mui/material";
import { CafeI } from "_types/cafes";
import CafeDescription from "(routes)/(Header)/cafe/list/CafeDescription";
import { NextImage } from "_commons/NextImage";
import CafeDetailModal from "./CafeDetailModal";
import Card from "@mui/material/Card";

interface propTypes {
  cafe: CafeI;
  rank: number;
  isRanking?: boolean;
}

const cardStyle = {
  minWidth: { xs: "12em", md: "20em" },
  mt: "2em",
  mr: "2em",
  ml: "0px",
  position: "relative",
  overflow: "visible",
  height: { xs: "13em", md: "360px" },
  borderRadius: "20px",
};

const rankStyle = {
  fontSize: "20em",
  mr: -3,
};

const CafeCard = ({ cafe, rank, isRanking }: propTypes) => {
  const [showCafeDetail, setShowCafeDetail] = useState(false);

  /**
   * open cafe detail
   */
  function handleCafeCardClick() {
    setShowCafeDetail(true);
  }

  /**
   * close cafe detail
   */
  function handleCafeDetailClose() {
    setShowCafeDetail(false);
  }

  return (
    <>
      <Stack
        sx={{
          "&:hover": {
            scale: "1.1",
            transition: "all 0.5s ease",
            cursor: "pointer",
          },
        }}
        direction="row"
      >
        {isRanking && <Typography sx={rankStyle}>{rank}</Typography>}
        <Card sx={cardStyle} onClick={handleCafeCardClick}>
          <Box sx={{ height: { xs: "100px", md: "55%" }, width: "100%" }}>
            <NextImage
              className="row__picture"
              src={cafe.image ? cafe.image : "/coffee.jpg"}
              alt="cafe1"
            />
            <CafeDescription cafe={cafe} />
          </Box>
        </Card>
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
