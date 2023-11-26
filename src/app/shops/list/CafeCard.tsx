"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./cafe-list.scss";
import {
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { CafeI } from "types/cafes";

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
      }}
    >
      <Image
        className="row__picture"
        src={cafe.image}
        alt=""
        width={300}
        height={150}
        layout="responsive"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      {isHovering && (
        <Stack
          sx={{
            m: "10px",
            position: "absolute",
            top: "220px",
          }}
          spacing={1}
        >
          <Typography variant="h5" sx={{ mb: "4px" }}>
            {cafe.title}
          </Typography>
          <Typography variant="h6">★★★★ {cafe.rate}</Typography>
          <Typography variant="body1">{cafe.area}</Typography>
          <Typography variant="body1">
            {cafe.openHour} ~ {cafe.closeHour}
          </Typography>
          <Typography variant="body1">
            Wifi {cafe.isWifi ? "○" : "×"}
          </Typography>
          <Typography variant="body1">
            電源 {cafe.isOutlet ? "○" : "×"}
          </Typography>
          <Typography variant="body1">
            喫煙 {cafe.isSmoking ? "○" : "×"}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default CafeCard;
