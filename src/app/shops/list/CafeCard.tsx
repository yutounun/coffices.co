"use client";
import React, { useState } from "react";
import "./cafe-list.scss";
import {
  Box,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";
import CafeDescription from "./CafeDescription";
import { NextImage } from "_commons/NextImage";

interface propTypes {
  cafe: CafeI;
}

const CafeCard = ({ cafe }: propTypes) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
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
    >
      <Box sx={{ height: "200px", width: "300px" }}>
        <NextImage
          src={cafe.image}
          alt="cafe1"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
        <CafeDescription cafe={cafe} />
      </Box>
    </Stack>
  );
};

export default CafeCard;
