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
  isTokyoRanking?: boolean;
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

const CafeCard = ({ cafe, rank, isTokyoRanking }: propTypes) => {
  const [showCafeDetail, setShowCafeDetail] = useState(false);

  const rankStyle = {
    color: "custom.darkGray",
    fontSize: { sm: "10em", md: "16em" },
    letterSpacing: "-20px",
    mr: { sm: 0, md: -1 },
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
        {/* Ranking Number */}
        {isTokyoRanking && <Typography sx={rankStyle}>{rank}</Typography>}

        {/* Card */}
        <Card sx={cardStyle} onClick={handleCafeCardClick}>
          <Box sx={{ height: { xs: "100px", md: "55%" }, width: "100%" }}>
            <NextImage
              className="row__picture"
              src={"/coffee.jpg"}
              alt="cafe1"
            />
            <CafeDescription cafe={cafe} />
          </Box>
        </Card>
      </Stack>

      {/* Cafe Detail Modal */}
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
