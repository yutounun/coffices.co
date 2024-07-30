"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CafeI } from "@/types/cafes";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import CafeCard from "#/cafe/list/CafeCard";
import Loading from "loading";
import Arrow from "@/components/Arrow";
import useMobile from "@/hooks/useMobile";
import useTranslate from "@/hooks/useTranslate";

interface propTypes {
  cafes: CafeI[];
  area: string;
  isLoading?: boolean;
  isRanking?: boolean;
}

enum maxCafeCount {
  desktop = 4,
}

enum scrollOffset {
  left = -1800,
  right = 1800,
}

const baseTypeStyle = {
  m: "1em",
  textDecoration: "none",

  fontWeight: 700,
  letterSpacing: ".3rem",
};

const CafeRow = ({ cafes, area, isLoading, isRanking }: propTypes) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isScrollLeft, setIsScrollLeft] = useState(false);
  const [isScrollRight, setIsScrollRight] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const { isMobile } = useMobile();
  const { t } = useTranslate();

  /**
   * - Check if arrows should be shown by checking the current position
   */
  const checkScrollPosition = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsScrollLeft(scrollLeft > 0);
      setIsScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  /**
   * Scroll left or right
   * @param scrollOffset
   *   -1800: scroll left
   *    1800: scroll right
   */
  const scroll = useCallback((scrollOffset: number) => {
    if (containerRef.current) {
      // TODO: Should be smooth movement
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
      checkScrollPosition();
    }
  }, []);

  useEffect(() => {
    checkScrollPosition();
    cafes?.length < maxCafeCount.desktop
      ? setShowScroll(false)
      : setShowScroll(true);
    setIsScrollRight(true);

    const currentContainer = containerRef.current;
    currentContainer?.addEventListener("scroll", checkScrollPosition);
    return () =>
      currentContainer?.removeEventListener("scroll", checkScrollPosition);
  }, [cafes?.length]);

  return (
    <>
      <Typography
        variant="h5"
        sx={{
          ...baseTypeStyle,
          color: "inherit",
          fontSize: { xs: "1.5em", md: "1.7em" },
        }}
      >
        {area}
      </Typography>

      {!isLoading && cafes?.length === 0 ? (
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
      ) : (
        <Stack
          direction="row"
          spacing={3}
          sx={{
            mx: { xs: 2.5, md: "0" },
            alignItems: "center",
          }}
        >
          {/* left arrow */}
          {!isMobile && (
            <Arrow
              hidden={!isScrollLeft || !showScroll || isMobile}
              direction="left"
              onClick={() => scroll(scrollOffset.left)}
            />
          )}

          <Stack
            ref={containerRef}
            direction="row"
            spacing={3}
            className="row__cards"
          >
            {isLoading ? (
              <Loading />
            ) : (
              cafes?.map((cafe, index) => (
                <CafeCard
                  isRanking={isRanking}
                  key={cafe._id}
                  rank={index + 1}
                  cafe={cafe}
                />
              ))
            )}
          </Stack>

          {/* right arrow */}
          {!isMobile && (
            <Arrow
              hidden={!isScrollRight || !showScroll}
              direction="right"
              onClick={() => scroll(scrollOffset.right)}
            />
          )}
        </Stack>
      )}
    </>
  );
};

export default CafeRow;
