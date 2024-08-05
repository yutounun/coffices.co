"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Stack, StackProps } from "@mui/material";
import ScrollBtn from "@/components/ui/ScrollBtn";
import { desktop } from "@/utils/const";

interface CustomButtonProps extends StackProps {
  children: React.ReactNode;
  cardCount: number;
  type?: string;
  height?: Object;
}

// Cards wrapped by this component can be scrolled horizontally
// My Fav component
const ScrollCardRow: React.FC<CustomButtonProps> = ({
  cardCount,
  children,
  type = "cafe",
  height = { xs: "19em", md: "350px" },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftScrollBtn, setShowLeftScrollBtn] = useState(false);
  const [showRightScrollBtn, setShowRightScrollBtn] = useState(false);
  const [showScroll, setShowScroll] = useState(true);

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
    if (type === "cafe") {
      setShowScroll(cardCount >= desktop.maxCafeDisplayCount);
    }
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
          height,
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
