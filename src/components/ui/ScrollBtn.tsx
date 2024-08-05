import { Stack } from "@mui/material";
import React from "react";
import Arrow from "./Arrow";
import { mobile, desktop } from "@/utils/const";

interface ScrollBtnProps {
  showScroll: boolean;
  showLeftScrollBtn: boolean;
  showRightScrollBtn: boolean;
  scroll: (offset: number) => void;
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
      sx={{
        justifyContent: "right",
        px: { xs: mobile.space.around, md: desktop.space.around },
        mt: 0,
      }}
    >
      {/* Left arrow */}
      <Arrow
        hidden={!showLeftScrollBtn || !showScroll}
        direction="left"
        onClickArrow={() => scroll(desktop.scrollOffset.left)}
      />
      {/* Right arrow */}
      <Arrow
        hidden={!showRightScrollBtn || !showScroll}
        direction="right"
        onClickArrow={() => scroll(desktop.scrollOffset.right)}
      />
    </Stack>
  );
};

export default ScrollBtn;
