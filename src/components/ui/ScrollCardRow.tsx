"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Stack, StackProps } from "@mui/material";
import ScrollBtn from "@/components/ui/ScrollBtn";
import { maxCafeDisplayCount } from "@/utils/const";

interface CustomButtonProps extends StackProps {
  children: React.ReactNode;
  cardCount: number;
}

// Cards wrapped by this component can be scrolled horizontally
// My Fav component
const ScrollCardRow: React.FC<CustomButtonProps> = ({
  cardCount,
  children,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftScrollBtn, setShowLeftScrollBtn] = useState(false);
  const [showRightScrollBtn, setShowRightScrollBtn] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollPosition = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftScrollBtn(scrollLeft > 0);
      setShowRightScrollBtn(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const scroll = useCallback(
    (offset: number) => {
      if (containerRef.current) {
        containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
        checkScrollPosition();
      }
    },
    [checkScrollPosition]
  );

  useEffect(() => {
    checkScrollPosition();
    setShowScroll(cardCount >= maxCafeDisplayCount.desktop);
    setShowRightScrollBtn(true);

    const currentContainer = containerRef.current;
    currentContainer?.addEventListener("scroll", checkScrollPosition);
    return () =>
      currentContainer?.removeEventListener("scroll", checkScrollPosition);
  }, [cardCount, checkScrollPosition]);

  return (
    <>
      <Stack
        direction="row"
        ref={containerRef}
        sx={{
          overflowX: "scroll",
          overflowY: "hidden",
          width: "100vw",
          height: "350px",
        }}
      >
        {children}
      </Stack>

      <ScrollBtn
        showScroll={showScroll}
        showLeftScrollBtn={showLeftScrollBtn}
        showRightScrollBtn={showRightScrollBtn}
        scroll={scroll}
      />
    </>
  );
};

export default ScrollCardRow;
