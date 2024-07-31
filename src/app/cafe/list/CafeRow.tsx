"use client";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { CafeI } from "@/types/cafes";
import { Box, Stack, Typography } from "@mui/material";
import CafeCard from "#/cafe/list/CafeCard";
import Arrow from "@/components/ui/Arrow";
import useMobile from "@/hooks/useMobile";
import useTranslate from "@/hooks/useTranslate";

interface propTypes {
  cafes: CafeI[];
  titleType: string;
  isTokyoRanking?: boolean;
}

enum maxCafeDisplayCount {
  desktop = 4,
}

enum scrollOffset {
  left = -1800,
  right = 1800,
}

const baseTypeStyle = {
  mt: "1em",
  textDecoration: "none",
};

const CafeRow = ({ cafes, titleType, isTokyoRanking }: propTypes) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftScrollBtn, setShowLeftScrollBtn] = useState(false);
  const [showRightScrollBtn, setShowRightScrollBtn] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const { isMobile } = useMobile();
  const { t } = useTranslate();

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
    setShowScroll(cafes?.length >= maxCafeDisplayCount.desktop);
    setShowRightScrollBtn(true);

    const currentContainer = containerRef.current;
    currentContainer?.addEventListener("scroll", checkScrollPosition);
    return () =>
      currentContainer?.removeEventListener("scroll", checkScrollPosition);
  }, [cafes?.length, checkScrollPosition]);

  const firstCardStyle = (index: number) => {
    if (titleType === "Tokyo") {
      return index === 0 ? { pl: 21 } : {};
    } else {
      return index === 0 ? { pl: 25 } : {};
    }
  };

  return (
    <>
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          ...baseTypeStyle,
          color: "inherit",
          px: 25,
          fontWeight: "medium",
          fontSize: { xs: "1.5em", md: "1.7em" },
        }}
      >
        {titleType}
      </Typography>

      {/* Default CardList */}
      {cafes?.length > 0 && (
        <Stack>
          {/* Cards */}
          <Stack ref={containerRef} direction="row" className="row__cards">
            {cafes?.map((cafe, index) => (
              <Box key={cafe._id} sx={firstCardStyle(index)}>
                <CafeCard
                  isTokyoRanking={isTokyoRanking}
                  key={cafe._id}
                  rank={index + 1}
                  cafe={cafe}
                />
              </Box>
            ))}
          </Stack>

          {/* Arrows */}
          <Stack
            direction="row"
            gap="10"
            sx={{ justifyContent: "right", px: 22, mt: 2 }}
          >
            {/* Left arrow */}
            {!isMobile && (
              <Arrow
                hidden={!showLeftScrollBtn || !showScroll}
                direction="left"
                onClickArrow={() => scroll(scrollOffset.left)}
              />
            )}

            {/* Right arrow */}
            {!isMobile && (
              <Arrow
                hidden={!showRightScrollBtn || !showScroll}
                direction="right"
                onClickArrow={() => scroll(scrollOffset.right)}
              />
            )}
          </Stack>

          {/* Not Found */}
          {cafes?.length === 0 && (
            <Typography
              sx={{
                ...baseTypeStyle,
                fontSize: { xs: "1em", md: "1.3em" },
                textAlign: "center",
                color: "#666666",
              }}
            >
              {t?.list.noData}
            </Typography>
          )}
        </Stack>
      )}
    </>
  );
};

export default CafeRow;
