"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./cafe-list.scss";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";

const CafeCard = () => {
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
        backgroundColor: "white",
        zIndex: "40",
      }}
    >
      <Image
        className="row__picture"
        src="/cafe1.png"
        alt=""
        width={300}
        height={150}
        layout="responsive"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {isHovering && (
        <Stack sx={{ m: "10px" }} spacing={1}>
          <Typography
            variant="h5"
            sx={{ mb: "4px", display: "flex", justifyContent: "center" }}
          >
            Nomad Cafe
          </Typography>
          <Typography variant="h6">★★★★ 4.0</Typography>
          <Typography variant="body1">東京都中目黒区</Typography>
          <Typography variant="body1">Wifi ○</Typography>
          <Typography variant="body1">電源 ○</Typography>
          <Typography variant="body1">7:00 ~ 18:00</Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default CafeCard;
