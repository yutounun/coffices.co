"use client";
import React, { useState } from "react";
import "@/styles/cafe-list.scss";
import { Box, Typography, Stack, useMediaQuery, useTheme } from "@mui/material";
import { CafeI } from "@/types/cafes";
import CafeDescription from "#/cafe/list/CafeDescription";
import { NextImage } from "@/components/ui/NextImage";
import CafeDetailModal from "./CafeDetailModal";
import Card from "@mui/material/Card";
import useMobile from "@/hooks/useMobile";

interface propTypes {
  cafe: CafeI;
  rank?: number;
  isRanking?: boolean;
}

const cardStyle = {
  width: { xs: "12em", md: "17em" },
  mt: "2em",
  mr: "2em",
  ml: "0px",
  position: "relative",
  overflow: "visible",
  height: { xs: "13em", md: "360px" },
  borderRadius: "20px",
};

const CafeCard = ({ cafe, rank, isRanking }: propTypes) => {
  const [showCafeDetail, setShowCafeDetail] = useState(false);
  const { isMobile } = useMobile();

  const rankStyle = {
    fontSize: isMobile ? "10em" : "16em",
    mr: isMobile ? 0 : -3,
    ml: 0,
  };

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
          ml: "0px",
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
