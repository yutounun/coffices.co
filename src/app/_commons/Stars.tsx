import React from "react";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Stack, useMediaQuery, useTheme } from "@mui/material";

interface propTypes {
  rate: number;
}

const Stars = ({ rate }: propTypes) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const stars = [];
  const wholePart = Math.floor(rate); // 整数部分
  const decimalPart = rate - wholePart; // 小数部分

  for (let i = 0; i < 5; i++) {
    if (i < wholePart) {
      stars.push(
        <StarIcon
          fontSize={isMobile ? "small" : "medium"}
          color="warning"
          key={i}
        />
      );
    } else if (i === wholePart && decimalPart >= 0.5) {
      stars.push(
        <StarHalfIcon
          fontSize={isMobile ? "small" : "medium"}
          color="warning"
          key={i}
        />
      );
    } else {
      stars.push(
        <StarBorderIcon
          fontSize={isMobile ? "small" : "medium"}
          color="warning"
          key={i}
        />
      );
    }
  }

  return (
    <Stack direction="row" sx={{ alignItems: "center" }}>
      {stars}
    </Stack>
  );
};

export default Stars;
