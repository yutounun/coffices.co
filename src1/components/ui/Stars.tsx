import React from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Stack } from "@mui/material";

interface propTypes {
  rate: number;
  size: Object;
}

const Stars = ({ rate, size }: propTypes) => {
  const starStyle = {
    fontSize: size,
  };

  const stars = [];
  const wholePart = Math.floor(rate); // 整数部分
  const decimalPart = rate - wholePart; // 小数部分

  // Style color on stars depending on review score
  for (let i = 0; i < 5; i++) {
    if (i < wholePart) {
      stars.push(<StarIcon sx={starStyle} color="warning" key={i} />);
    } else if (i === wholePart && decimalPart >= 0.5) {
      stars.push(<StarHalfIcon sx={starStyle} color="warning" key={i} />);
    } else {
      stars.push(<StarBorderIcon sx={starStyle} color="warning" key={i} />);
    }
  }

  return (
    <Stack direction="row" sx={{ alignItems: "center", ml: -0.3 }}>
      {stars}
    </Stack>
  );
};

export default Stars;
