import { Stack } from "@mui/material";
import React from "react";
import Arrow from "./Arrow";

enum scrollOffset {
  left = -1300,
  right = 1300,
}

interface ScrollBtnProps {
  showScroll: boolean;
  showLeftScrollBtn: boolean;
  showRightScrollBtn: boolean;
  scroll: (offset: scrollOffset) => void;
}

const ScrollBtn: React.FC<ScrollBtnProps> = ({
  showScroll,
  showLeftScrollBtn,
  showRightScrollBtn,
  scroll,
}) => {
  return (
    <Stack direction="row" sx={{ justifyContent: "right", px: 25, mt: 0 }}>
      {/* Left arrow */}
      <Arrow
        hidden={!showLeftScrollBtn || !showScroll}
        direction="left"
        onClickArrow={() => scroll(scrollOffset.left)}
      />

      {/* Right arrow */}
      <Arrow
        hidden={!showRightScrollBtn || !showScroll}
        direction="right"
        onClickArrow={() => scroll(scrollOffset.right)}
      />
    </Stack>
  );
};

export default ScrollBtn;
