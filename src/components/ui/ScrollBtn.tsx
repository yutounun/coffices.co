import { Stack } from "@mui/material";
import React from "react";
import Arrow from "./Arrow";
import { scrollOffset, space } from "@/utils/const";

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
    <Stack
      direction="row"
      sx={{ justifyContent: "right", px: space.around, mt: 0 }}
    >
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
